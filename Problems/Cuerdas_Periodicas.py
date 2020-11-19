# -*- coding: utf-8 -*-
"""
Created on Wed Nov 18 16:26:02 2020

@author: felipemaldonadol
"""

from collections import OrderedDict

def contar_letras(cadena):
    nuevocaracter = [len(cadena)]
    contador = 0
    palabra = ""
    for c in range(len(cadena)):
        
        if contador == 0:
            nuevocaracter[c] = cadena[c]
            contador += 1
        elif nuevocaracter[c-1] != cadena[c]:
               nuevocaracter.append(cadena[c])
               contador += 1  
        else:
            nuevocaracter.append(cadena[c])
            contador += 1  
               
    for i in range(len(nuevocaracter)):
        palabra = palabra + nuevocaracter[i]    
        
        
    palabra = "".join(OrderedDict.fromkeys(palabra))  
           
    return palabra


texto = input('Digite un texto: ')
resultado = contar_letras(texto)
cant = len(resultado)

print('Cadena repetida: {}'.format(resultado))
print('Periodo mas pequeño: {}'.format(cant))
            