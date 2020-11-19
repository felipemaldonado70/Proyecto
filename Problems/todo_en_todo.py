# -*- coding: utf-8 -*-
"""
Created on Wed Nov 18 19:45:21 2020

@author: felipemaldonadol
"""

from difflib import SequenceMatcher
from itertools import accumulate


primercadena = input('Digite la primera cadena: ')
segundacadena = input('Digite la segunda cadena: ')

substr = list(accumulate(len(s) for s in segundacadena))

emparejamientosecuencia = SequenceMatcher(None, primercadena, ''.join(segundacadena), autojunk = False)

final = ''
match_index = 0
matches = [''] * len(segundacadena)

for tag, i1, i2, j1, j2 in emparejamientosecuencia.get_opcodes():
     if tag == 'delete' or tag == 'insert' or tag == 'replace':
       matches[match_index] += primercadena[i1:i2]
       while j1 < j2:
         submatch_len = min(substr[match_index], j2) - j1
         while submatch_len == 0:
           match_index += 1
           submatch_len = min(substr[match_index], j2) - j1
         j1 += submatch_len
     else:
       while j1 < j2:
         submatch_len = min(substr[match_index], j2) - j1
         while submatch_len == 0:
           match_index += 1
           submatch_len = min(substr[match_index], j2) - j1
         matches[match_index] += primercadena[i1:i1+submatch_len]
         final += primercadena[i1:i1+submatch_len]
         j1 += submatch_len
         i1 += submatch_len
         
primercadena = primercadena.lower()       
final = final.lower()       

if primercadena == final:
    print('Palabra final: {}'.format(final))
    print("Yes")
else:
    print('Palabra final: {}'.format(final))
    print("No")
    

