# -*- coding: utf-8 -*-
"""
Created on Wed Nov 18 19:17:17 2020

@author: felipemaldonadol
"""

from collections import OrderedDict


def Hola(cadena):
    resultado = False
    palabra = ""
    palabra = "".join(OrderedDict.fromkeys(cadena.lower()))  
    
    if palabra == "hola":
        resultado = True
    else:
        resultado = False
                
    return resultado



texto = input('Digite un texto: ')
resultado = Hola(texto)

print('Salida: {}'.format(resultado))