Data di stesura: 2025-08-17 23:19
Ultima modifica: 2025-08-17 23:19
Sezione (Argomento): 
- [ ] Padroneggiato

## Enunciato

### Argomenti collegati
- [[Dipendenza e Indipendenza Lineare]]
- [[Combinazioni Lineari]]

>[!theorem]
>Un insieme di vettori $S$ è linearmente indipendente se e solo se ogni vettore nel suo span ha un’unica rappresentazione come combinazione lineare degli elementi dell’insieme.

`\begin{proof}[Dimostrazione.]`
Si dimostra la doppia inclusione.
$(\implies)$ Se $S$ è linearmente indipendente, allora ogni vettore in $\mathrm{span}(S)$ ha un’unica rappresentazione.
1. Sia $v \in \mathrm{span}(S)$. Per definizione di span, esistono scalari $a_{1},a_{2},\dots,a_{k}$ tali che:
$$v=\sum^{k}_{i=1}a_{i}v_{i}$$
Supponiamo esistano scalari $b_{1},b_{2},\dots,b_{k}\in \mathrm{span}(S)$ tali che $v=\sum^k_{i=1}a_{i}v_{i}$.
Sottraendo le due equazioni:

$$0=v-v=\sum^k_{i=1}(a_{i}-b_{i})v_{i}.$$ Poichè $S$ è linearmente indipendente, allora necessariamente $(a_i-b_{i})=0 $\forall i=1,2,\dots,k,$ ovvero $a_i=b_i$. Pertanto, la rappresentazione di $v$ è unica.
$(\Longleftarrow)$ Se ogni vettore in $\mathrm{span}(S)$ ha un’unica rappresentazione, allora $S$ è linearmente indipendente.
Si consideri il vettore nullo $0$. Poichè $0\in \mathrm{span}(S)$, poichè lo span è un sottospazio vettoriale, e per ipotesi la rappresentazione è unica, l’unico modo per esprimere 0 come combinazione lineare dei vettori di $S$ è con tutti i coefficenti nulli.
Ora, supponiamo che esistano scalari $c_{1},c_{2},…,c_{k}\in \mathbb{K}$ tali che
$$\sum^k_{i=1}c_{i}v_{i}=0$$
Poichè la rappresentazione di $0$ è unica, deve essere $c_i=0$ per ogni $i=1,2,…,k$. Pertanto, $S$ è linearmente indipendente.
**Conclusione.** Un insieme $S$ è linearmente indipendente se e solo se ogni vettore in $\mathrm{span}(S)$ ha un’unica rappresentazione come combinazione lineare degli elementi di $S$.
#### Esercizi Collegati


##### FlashCards

###### Note

