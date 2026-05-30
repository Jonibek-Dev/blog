O'zim uchun !

Transformer — ChatGPT kabi zamonaviy AI modellarining asosiy arxitekturasi hisoblanadi. Uning vazifasi matndagi so‘zlar orasidagi bog‘liqlikni topish.

Masalan gap:

“Men choy ichdim”

Model “ichdim” so‘zi uchun:
— nima ichildi?
— kim ichdi?

degan bog‘liqliklarni qidiradi.

Bu jarayon Self-Attention deyiladi.

Self-Attention — har bir tokenning boshqa tokenlarga qanchalik bog‘liqligini hisoblaydigan mexanizm.

Transformer har bir token uchun 3 ta vector yaratadi:
— Query (Q)
— Key (K)
— Value (V)

Keyin model Query va Key orasidagi o‘xshashlikni hisoblaydi.

Formula:

Attention(Q,K,V)=softmax(QKᵀ/√dₖ)V

Bu yerda:
— QKᵀ → tokenlar o‘xshashligi
— √dₖ → sonlar juda kattalashib ketmasligi uchun
— softmax → natijani foizga aylantirish

Masalan soddalashtirib:

Men → [1,0]
choy → [0,2]
ichdim → [1,1]

Endi “ichdim” boshqa tokenlar bilan solishtiriladi.

“ichdim” va “choy”:

[1,1] · [0,2]

= 1×0 + 1×2
= 2

“ichdim” va “Men”:

[1,1] · [1,0]

= 1×1 + 1×0
= 1

Natija:
— “Men” → 1
— “choy” → 2

Demak “choy” kuchliroq bog‘langan.

Lekin bu hali foiz emas.

Transformer keyin Softmax ishlatadi.

e¹ ≈ 2.7
e² ≈ 7.4

Yig‘indi:

2.7 + 7.4 = 10.1

Foizlar:

— “Men” → 2.7 / 10.1 ≈ 27%
— “choy” → 7.4 / 10.1 ≈ 73%

Demak model:
“ichdim” ko‘proq “choy” bilan bog‘liq
deb tushunadi.

Transformerning yana bir muhim qismi — Multi-Head Attention.

Bu bitta emas, bir nechta attention ishlatadi:
— biri grammatika,
— biri ma’no,
— boshqasi uzoq bog‘liqliklarni ko‘radi.

Transformer ichida:
— Encoder
— Decoder

qismlari mavjud.

Encoder inputni tushunadi,
Decoder esa output generatsiya qiladi.

ChatGPT’da asosan Decoder ishlatiladi.

Transformerning eng katta ustunligi:
u matnni oddiy text emas, vectorlar orasidagi matematik bog‘liqlik sifatida ko‘radi.

Shuning uchun zamonaviy LLM’lar:
— kontekstni tushuna oladi
— uzun matnni eslab qoladi
— mantiqiy javob bera oladi

GPT nomidagi “T” harfi ham aynan Transformer degani.