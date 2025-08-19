Data di stesura: 2025-08-18 10:22
Ultima modifica: 2025-08-18 10:22
Sezione (Argomento): Esercizi (GEOM I)
- [ ] Corretto
## Sezioni collegate
## Testo
Dire per quali valori di $a,b \in \mathbb{R}$ esiste un applicazione lineare $T: \mathbb{R^4}\to\mathbb{R^3}$ tale che:
- $T(e_{1}+e_{2})=av_{1}+3v_{2}$ 
- $T(e_{2}+e_{3})=-v_{1}+(a+2)v_{2}$
- $T(e_{1}+e_{3})=(a-1)v_{1}+(a+1)v_{2}-v_{3}$
- $T(e_4)=$ $v_1+3v_{2}+bv_{3}$

Si richiede inoltre di:
1. Trovare il suo rango e la dimensione del nucleo al variare di $a,b \in \mathbb{R}$
2. Trovare tutte le coppie $(a,b) \in \mathbb{R}^2$ tali che il vettore $2v_1+bv_3$ appartenga all’immagine di $T$.
3. trovare per quali coppie $(a,b)\in \mathbb{R^2}$ esiste un’applicazione lineare $S: \mathbb{R^3}\to\mathbb{R^4}$  tale che $S \circ T$ sia diagonalizzabile con spettro $\{0,1  \}$.
### Soluzione
0. *Strategia.* Per trovare i valori $a,b$ per cui esiste l’applicazione lineare $T$, dobbiamo verificare se i vettori sono linearmente indipendenti tra di loro, altrimenti ci sarà un vincolo da rispettare per non creare una contraddizione. Prima però, scriviamo le coordinate come colonne della matrice $A$ nel dominio.
1. *Scrittura Matrice.* Quindi la matrice $A$:
$$\begin{pmatrix}
1 & 1  & 0\\
0 & 1& 1\\
1& 0 &1\\
\end{pmatrix}$$
Per vedere se sono linearmente indipendenti, riduco a scala.
2. *Riduzione a scala.*
$R_{3}\to R_{3}-R_{1}$, abbiamo quindi:
$$\begin{pmatrix}
1 & 1  & 0\\
0 & 1& 1\\
0& -1&1\\
\end{pmatrix}$$
$R_{3}\to R_{3}+R_{2}$
$$\begin{pmatrix}
1 & 1  & 0\\
0 & 1& 1\\
0& 0&1\\
\end{pmatrix}$$
La matrice è ora ridotta a scala. Poichè il rango è massimo, allora i vettori sono linearmente indipendenti.
Pertanto tutte i valori tra $(a,b)  \in \mathbb{R}^2$ sono valide.
3. Usiamo l’identità del dominio, che per linearità deve essere soddisfatta anche dall’immagine.
- $T(e_{1}+e_{2})=av_{1}+3v_{2}$ 
- $T(e_{2}+e_{3})=-v_{1}+(a+2)v_{2}$
- $T(e_{1}+e_{3})=(a-1)v_{1}+(a+1)v_{2}-v_{3}$
- $T(e_4)=$ $v_1+3v_{2}+bv_{3}$

Il nostro obiettivo è trovare $$T(e_{1}),T(e_{2}),T(e_{3})$$
Siano:
- $w_{1}=e_{1}+e_{2}$
- $w_{2}=e_{2}+e_{3}$
- $w_{3}=e_{1}+e_{3}$

Essendo $e_{1} \in \mathrm{span}(\mathbb{R}^3)$, allora questa [[Combinazioni Lineari#^49e914|combinazione lineare]] vale: 
$$
\alpha w_{1}+\beta w_{2}+ \gamma w_{3}=e_{1}
$$
Sostituiamo con i valori di sopra:
$$
\alpha(e_{1}+e_{2})+\beta(e_{2}+e_{3})+\gamma( e_{1}+e_{3})
$$
Sviluppo e raccolgo $e_i$

$$
\alpha e_{1}+\alpha e_{2}+\beta e_{2}+ \beta e_{3}+ \gamma e_{1}+\gamma e_{3}
$$
$$
e_{1}(\alpha+\gamma)+e_{2}(\alpha+\beta)+e_{3}(\beta+\gamma)
$$
Che si traduce in un sistema:
$$
\begin{cases}
\alpha+\gamma=1 \\
\alpha+\beta=0 \\
\beta+\gamma=0
\end{cases}
$$
Semplicemente otteniamo $\beta=-\gamma$, quindi $$\alpha=\gamma ,$$ che porta a:
$$
\begin{cases}
\alpha=\frac{1}{2} \\
\beta=-\frac{1}{2} \\
\gamma=\frac{1}{2}
\end{cases}
$$
Quindi la combinazione lineare cercata è:

$$
\frac{1}{2}(e_{1}+e_{2})-\frac{1}{2}(e_{2}+e_{3})+\frac{1}{2}(e_{1}+e_{3})=e_{1}
$$
Quindi per linearità vale:
$$
\frac{1}{2}T(e_{1}+e_{2})-\frac{1}{2}T(e_{2}+e_{3})+\frac{1}{2}T(e_{1}+e_{3})=T(e_{1})
$$
Che sono note:
- $T(e_{1}+e_{2})=av_{1}+3v_{2}$ 
- $T(e_{2}+e_{3})=-v_{1}+(a+2)v_{2}$
- $T(e_{1}+e_{3})=(a-1)v_{1}+(a+1)v_{2}-v_{3}$

$$
\frac{1}{2}(av_{1}+3v_{2})+\frac{1}{2}(-v_{1}-(a+2)v_{2})+\frac{1}{2}[(a-1)v_{1}+(a+1)v_{2}-v_{3}]
$$
Troviamo i coefficenti di $v_{1},v_{2},v_{3}$:

$$
$$
$$
\frac{1}{2}av_{1}+\frac{3}{2}v_{2}-\frac{1}{2}v_{1}+\frac{1}{2}(a+2)v_{2}+\frac{1}{2}[av_{1}-v_{1}+av_{2}+v_{2}-v_{3}]
$$
$$

\left( \frac{1}{2}a-\frac{1}{2}+\frac{1}{2}a-\frac{1}{2} \right)

$$

#### Teoria Collegata


##### Note

