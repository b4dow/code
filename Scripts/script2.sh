#!/usr/bin/bash

echo -n "Escribe un numero: "
read valor


# -gt -> Mayor a otro numero
# -lt -> menor que otro numero
# -le (lower or equal -> menor o igual que otro numero
# -ge (greater or equal) -> mayor o igual que otro numero
# -eq (equal) -> igualdad
# -ne (not equal) -> no es igual a otro numero
if [[ $valor -eq 5 ]]; then
    echo "tu numero es igual a 5"
else
    echo "Tu numero no es igual a 5"
fi