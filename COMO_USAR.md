# 💖 Site de Aniversário para a Fernanda

O site foi criado com muito carinho, design moderno, animações românticas e total interatividade!

---

## 🌟 O que o site inclui:

1. **Abertura Romântica (Hero)**: Mensagem especial de aniversário para a Fernanda com partículas de corações flutuantes que interagem com o movimento do mouse.
2. **Contador do Nosso Amor**: Mostra ao vivo há quantos Anos, Meses, Dias, Horas, Minutos e Segundos vocês estão juntos.
3. **Carta de Amor Interativa (Envelope 3D)**: Um envelope com selo de coração que, ao clicar, abre e desliza uma carta apaixonada com chuva de confetes!
4. **Mural de Fotos Polaroid**: Galeria estilo polaroid com fitas adesivas (washi tape), leve inclinação natural e **Lightbox em tela cheia** (com setas para navegar).
   - Você pode trocar/adicionar fotos diretamente pelo botão na página ou alterando a pasta `images/`!
5. **Nossa Trilha Sonora (Spotify + Legendas)**:
   - Vitrola com disco de vinil giratório.
   - Botões para alternar entre diferentes músicas.
   - **Player oficial do Spotify** para ouvir a música na hora.
   - **Legenda personalizada** explicando a história/significado de cada música para vocês e trecho marcante da letra!
6. **Pote dos Motivos para Te Amar**: Um pote de vidro interativo com corações flutuantes. Ao tocar no pote, ele sorteia um motivo carinhoso e solta confetes!
7. **Linha do Tempo (Nossa História)**: Marcos especiais da história de vocês (o começo, primeiro encontro, primeiro beijo, momentos inesquecíveis e o aniversário hoje).
8. **Explosão de Amor & Confetes**: Botões para celebrar com chuvas de confetes coloridos.

---

## 🛠️ Como Personalizar em 2 Minutos

Abra o arquivo [`script.js`](file:///c:/Users/pedro/Downloads/Fernanda/script.js) no topo para editar:

### 1. Data de Início (Contador):
Procure por:
```javascript
startDate: new Date(2025, 6, 6, 0, 0, 0), // 06 de Julho de 2025
```
> *Lembrete sobre os meses em Javascript (começa em 0):*
> Janeiro = 0, Fevereiro = 1, Março = 2, Abril = 3, Maio = 4, Junho = 5, Julho = 6, Agosto = 7, Setembro = 8, Outubro = 9, Novembro = 10, Dezembro = 11.

---

### 2. Músicas do Spotify & Suas Legendas:
No `script.js`, dentro de `spotifyTracks`:
```javascript
{
  id: 1,
  title: "Nome da Música",
  artist: "Nome do Artista",
  spotifyId: "3n3Ppam7vgaVa1iaRUc9Lp", // Pegue o código do link da música no Spotify
  caption: "Sua legenda contando por que essa música é especial...",
  lyrics: "“Trecho da letra que você mais gosta...”"
}
```
**Como pegar o `spotifyId`:**
1. No Spotify (no app ou web), clique nos 3 pontinhos da música.
2. Vá em **Compartilhar -> Copiar link da música**.
3. O link será algo como: `https://open.spotify.com/track/3n3Ppam7vgaVa1iaRUc9Lp?si=...`
4. Copie apenas a parte depois de `/track/` (antes do `?`), por exemplo: `3n3Ppam7vgaVa1iaRUc9Lp`.

---

### 3. Fotos Reais de Vocês:
Você tem duas opções fáceis:
- **Opção A (Sem mexer em código):** Clique no botão **"Personalizar / Adicionar Fotos"** na própria página e selecione as fotos do seu celular ou computador!
- **Opção B (Fixar no código):** Coloque suas fotos na pasta `images/` (ex: `images/foto1.jpg`) e coloque o caminho no arquivo [`script.js`](file:///c:/Users/pedro/Downloads/Fernanda/script.js) dentro de `defaultPhotos`.

---

## 🚀 Como Colocar na Internet para Mandar para Ela no WhatsApp

Para ela poder abrir no celular dela de onde estiver:
1. Você pode subir essa pasta no [Vercel](https://vercel.com/) (grátis, só arrastar a pasta ou via GitHub).
2. Ou no [Netlify Drop](https://app.netlify.com/drop) (grátis: basta arrastar essa pasta inteira `Fernanda` e em 10 segundos seu site estará no ar com link público!).
3. Depois, copie o link e mande no WhatsApp dela! O link já está configurado com título e prévia bonitinha para mensagens.
