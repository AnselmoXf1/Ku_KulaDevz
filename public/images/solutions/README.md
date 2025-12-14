# Imagens das Soluções da Ku Kula Devz

Esta pasta contém as imagens/logos dos projetos e soluções desenvolvidas pela equipe.

## Arquivos atuais:

1. **iagromoz-logo.png** - Logo do projeto IAGROMOZ (Plataforma de apoio ao agricultor)

## Para adicionar novas soluções:

1. **Formato recomendado**: PNG com fundo transparente ou JPG
2. **Tamanho**: Mínimo 800x600px para boa qualidade
3. **Proporção**: 4:3 ou 16:9 funciona bem
4. **Nomenclatura**: `[nome-projeto]-logo.png` ou `[nome-projeto]-banner.jpg`

## Como usar:

1. Adicione a imagem nesta pasta
2. Atualize o arquivo `constants.ts` na raiz do projeto
3. No array `projects`, defina o caminho da imagem: `image: "/images/solutions/nome-arquivo.png"`

## Exemplo de configuração no constants.ts:

```typescript
{
  id: "meu-projeto",
  title: "Meu Projeto",
  description: "Descrição do projeto...",
  tags: ["Web", "Mobile"],
  image: "/images/solutions/meu-projeto-logo.png",
  featured: true
}
```