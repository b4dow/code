#!/usr/bin/bash

echo -n "Escribe un numero: "
read valor

# -a -> operacion logica and
# -o -> operacion logica or
# los dobles corchetes cuando no usas operaciones logicas y cuando queres comparar cadenas

if [ $valor -le 5 -o $valor -gt 10 ]; then
    echo "tu numero esta en el rango [5, 10]"
else
    echo "Tu numero no esta en el rango [5, 10]"
fi

