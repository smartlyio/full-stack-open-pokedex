var="$(curl "localhost:8080/health")" 

if [[ $var =~ "ok" ]]; then
    echo "1"
else
    echo "2"
fi