#!/usr/bin/bash

# $# -> para contar los parametros
# echo "Numero de parametros recibidos: $1"

# Script que calcule los bits que ocupa un directorio

# -f -> para saber si existe el fichero
# -d -> para saber si existe el directorio
if [ ! -d $1 ];then
    echo "Error : El directorio no existe"
    exit 1
fi


for f in `ls $1`; do
    name=$1/$f
    if [ -f $name ]; then
        bytes=`ls -l $name | awk $'{print $5}'`
        echo "Fichero $name ocupa $bytes" | tr -s /
        (( total += $bytes ))
    
    fi
done

echo -e "\nTotal: $total"