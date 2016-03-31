
// 对sh文件进行ignore
var ignores = fis.get('project.ignore');
ignores.push('*.sh');
fis.set('project.ignore', ignores);

fis.media('prod').match('::packager', {
    spriter: fis.plugin('csssprites'),
//    packager: fis.plugin('map', {
  //      'pkg/lib.js': [
    //        'assets/js/jquery.min.js',
      //      'assets/js/jquery.fullpage.js'
       // ]
    //}),
    postpackager: fis.plugin('loader', {
        allInOne: true
    })
});

fis.media('prod').match('*{js,css,png,jpg,ico,jpeg}', {
    useHash: true,
});

// 发布的时候，media为
fis.match('*{js,css,png,jpg,jpeg}', {
    release: '/static/$0'
});

fis.media('prod').match ('*.css', {
    optimizer: fis.plugin('clean-css')
});

fis.media('prod').match('*.js', {
    optimizer: fis.plugin('uglify-js')
});

fis.match('*.png', {
    optimizer: fis.plugin('png-compressor')
});


