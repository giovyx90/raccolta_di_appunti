---
tags:
  - sistemi_lineari
  - teorema
  - importante
  - rango
data creazione: 2025-08-17
corso: Geometria I
ultima review: 2025-08-17
aliases:
---
#ripassare 

Il teorema di Rouchè-Capelli è utile per verificare quando un [[Sistema lineare|sistema lineare]] è compatibile.
### Enunciato

>[!theorem] Teorema di Rouchè-Capelli
>Sia $Ax=b$ un sistema lineare qualsiasi con $A$ matrice dei coefficenti  e sia $\overline{A}$ la matrice completa (o aumentata). Il sistema è compatibile se e solo se $\operatorname{rank}(A)$=$\operatorname{rank}(\overline{A})$. Se sono diversi allora il sistema è incompatibile. Altrimenti, se $\operatorname{rank}(A)= \operatorname{rank}(\overline{A})$ e minori di $n$, allora  il sistema ammette infinite soluzioni.

`\begin{proof}[Dimostrazione.]`

Sia $Ax=b$ il sistema e $\overline{A}=(A|b)$ la matrice aumentata.

Se $\operatorname{rank}(A)\neq \operatorname{rank}(\overline{A})$, 
riducendo $\overline{A}$ a scala otteniamo una riga del tipo 
$(0\ 0\ \dots\ 0\ |\ b)$ con $b\neq 0$, che rappresenta un’equazione
contraddittoria. Quindi il sistema è incompatibile.

Se invece $\operatorname{rank}(A)=\operatorname{rank}(\overline{A})=r$:

- Se $r=n$, allora non ci sono variabili libere: tutte le incognite sono determinate, 
e il sistema ammette una sola soluzione.

- Se $r<n$, allora ci sono $n-r>0$ variabili libere, che possono assumere 
valori arbitrari: il sistema ammette infinite soluzioni.

In entrambi i casi il sistema è compatibile.
`\end{proof}`


| **Rango**                                          |                  **Esistenza delle soluzioni** |
| -------------------------------------------------- | ---------------------------------------------: |
| $\mathrm{rank}(A)\neq \mathrm{rank}(\overline{A})$ |              Non esistono, $S=\{ \emptyset \}$ |
| $\mathrm{rank}(A)< \mathrm{rank}(\overline{A})$    | Infinite soluzioni causate da variabili libere |
| $\mathrm{rank}(A) = \mathrm{rank}(\overline{A})$   |                              Esiste ed è unica |

### Esercizi su Rouchè-Capelli (Archivio)