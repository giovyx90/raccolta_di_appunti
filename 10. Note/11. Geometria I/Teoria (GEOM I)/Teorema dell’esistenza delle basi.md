Data di stesura: 2025-08-17 18:35
Ultima modifica: 2025-08-17 18:35
Sezione (Argomento): Teoria (GEOM I)
- [ ] Padroneggiato

#ripassare #basidimensioni

## Sezioni collegate
- [[Basi e Dimensione]]
- [[Combinazioni Lineari (Hub)]]
- [[Spazi Vettoriali]]

## Enunciato

>[!theorem] Esistenza delle basi
>Sia $V$ uno spazio vettoriale in $\mathbb{K}$ di dimensione $n$. Allora ammette sempre una base.

`\begin{proof}[Dimostrazione.]`
Si procede per induzione su $k$.
1. ($k=0$) L’insieme vuoto è per definizione linearmente indipendente.
2. (*Ipotesi induttiva*) Sia $V$ allora uno spazio vettoriale con  $k$ vettori linearmente indipendente, chiamato $I_k$
3. (*Passo induttivo*) Se $\mathrm{span}I_{k}=V$, allora ammette base e la dimostrazione è conclusa.
Se invece $\mathrm{span}I_{k}\subset V$, allora si può scegliere per il [[lemma dello scambio]] un vettore $v_{k+1}\not\in \mathrm{span}I_{k}$, quindi l’insieme $I_{k+1}\cup \{ v_{k+1} \}$ è linearmente indipendente, che porta a conclusione.

**Conclusione.** Ogni spazio vettoriale di dimensione finita ammette una base. `\end{proof}`

#### Esercizi Collegati


##### FlashCards

Enuncia il teorema dell’esistenza delle basi. :: Sia $V$ uno spazio vettoriale di dimensione finita. Allora ammette sempre almeno una base.
<!--SR:!2025-08-21,4,270-->

Si procede per induzione su $k$. ($k=0$) L’insieme vuoto è ==per definizione linearmente indipendente.==[^1] (*Ipotesi induttiva*) Sia $V$ allora uno spazio vettoriale con  $k$ vettori linearmente indipendente, chiamato $I_k$.  (*Passo induttivo*) ==Se $\mathrm{span}I_{k}=V$, allora ammette base e la dimostrazione è conclusa.==[^2] Se invece $\mathrm{span}I_{k}\subset V$, allora si può scegliere per il ==[[lemma dello scambio]]==[^1] un vettore $v_{k+1}\not\in \mathrm{span}I_{k}$, quindi l’insieme $I_{k+1}\cup \{ v_{k+1} \}$ è linearmente indipendente, che porta a conclusione.

###### Note

