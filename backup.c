#include <stdio.h>

void main(){

    setuid(0);

    printf("\n\n[*] Listando procesos (/usr/bin/htop):\n\n");
    system("/usr/bin/htop");
    printf("\n\n[*] Listando procesos (htop):\n\n");
    system("htop");
}
