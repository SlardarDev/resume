
rm -rf output
rm -f output.tgz
case "$1" in
    "debug")
        fis3 release -wL
        ;;
    "release")
        mkdir output
        fis3 release prod -d output
        tar zcf output.tgz output
        ;;
    "watch")
        mkdir output
        fis3 release -d output
        ;;
    *)
        fis3 release -wL
        ;;
esac


