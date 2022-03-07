#!/usr/bin/bash

echo -n "Escribe un numero: "
read limite


# El uso de bucles es para hacer repeticion

for (( i = 0; i <= $limite; i++ )); do
    echo $i
done