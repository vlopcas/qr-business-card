# qr.vlopcas.dev

Página intermediária do QR code do cartão de visitas. Exibe uma transição curta e encaminha para `https://links.vlopcas.dev`.

## Desenvolvimento

```bash
npm install
npm run dev
```

O projeto usa exportação estática do Next.js e é publicado no GitHub Pages pelo workflow incluído.

- `/` redireciona para a página principal de links.
- `/card` é o endereço estável usado no QR do cartão presencial e também redireciona para a página principal de links.
