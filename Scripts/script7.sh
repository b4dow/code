#!/usr/bin/bash

error() {
    echo $1
    exit 1
}

if [[ $# -ne 2 ]]; then
    error "Uso: script  prefijo ruta"
fi

if [ ! -d $2 ]; then
   error "Error: el directorio noo existe"
fi




for f in `ls $2`;do

	name=$2/$f
	
	new_name=$2/$1$f 
	
	mv $name $new_name

	echo "$name -> $new_name"

done





