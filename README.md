<p align="center">
     <img src="./docs/assets/thumb.png"  />
</p>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/gabrielmoura33/nest-js-text-to-image-artificial-inteligence-api">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/gabrielmoura33/nest-js-text-to-image-artificial-inteligence-api">
  
  <a href="https://github.com/WallysonGalvao/rocketseat-gobarber/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/gabrielmoura33/nest-js-text-to-image-artificial-inteligence-api">
  </a>

  <a href="https://github.com/WallysonGalvao/rocketseat-gobarber/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/gabrielmoura33/nest-js-text-to-image-artificial-inteligence-api">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

Este Projeto foi criado com o intuito de criar uma API Rest utilizando o framework [**NestJS**](https://nestjs.com) para integrar com os dois modelos de inteligencia artificial _text-to-image_ mais conhecidos atualmente([**Stabble Difusion**](https://stability.ai/blog/stable-diffusion-public-release) e [**Dall-E 2**](https://openai.com/dall-e-2/)). Neste projeto estaremos disponibilizando endpoints para utilizar as funcionalidades de geração / edição de imagens utilizando inteligencia artificial, tambem utilizaremos o [**Image Magic**](https://imagemagick.org/index.php), um software open-source para a edição de imagens utilizado para adequar as imagens recebidas para o formato aceito pelo respectivo modelo e criaremos uma arquitetura utilizando o banco de dados **Redis** para gerenciamento de filas e concorrencia para a geração das imagens.

<!--
[![](https://img.shields.io/pypi/v/mvt)](https://pypi.org/project/mvt/)
[![Documentation Status](https://readthedocs.org/projects/mvt/badge/?version=latest)](https://docs.mvt.re/en/latest/?badge=latest)
[![CI](https://github.com/mvt-project/mvt/actions/workflows/python-package.yml/badge.svg)](https://github.com/mvt-project/mvt/actions/workflows/python-package.yml)
[![Downloads](https://pepy.tech/badge/mvt)](https://pepy.tech/project/mvt) -->

## :books: Requisitos

- [**Node.js**](https://nodejs.org/en/).
- [**Docker**](https://www.docker.com/).
- [**Docker Compose**](https://docs.docker.com/compose/install/).
- [**PNPM**](https://pnpm.io/installation).
- [**ImageMagick**](https://imagemagick.org/index.php)

## :books: Tecnologias Utilizadas

- [**Node.js**](https://nodejs.org/en/) + [**NestJS**](https://nestjs.com)
- [**ImageMagick**](https://imagemagick.org/index.php)
- [**Stabble Difusion**](https://stability.ai/blog/stable-diffusion-public-release)
- [**Dall-E 2**](https://openai.com/dall-e-2/))
- [**Bull Queue**](https://github.com/OptimalBits/bull)
- [**Redis**](https://redis.io)

<!--
## Usage

<!-- MVT provides two commands `mvt-ios` and `mvt-android`. [Check out the documentation to learn how to use them!](https://docs.mvt.re/) -->

<!-- ## License

The purpose of MVT is to facilitate the **_consensual forensic analysis_** of devices of those who might be targets of sophisticated mobile spyware attacks, especially members of civil society and marginalized communities. We do not want MVT to enable privacy violations of non-consenting individuals. In order to achieve this, MVT is released under its own license. [Read more here.](https://docs.mvt.re/en/latest/license/) -->

**@Author:** 👨🏾‍💻 - Gabriel de Moura e Souza. <br />
**@Linkedin:** [Gabriel de Moura e Souza](linkedin.com/in/gabriel-de-moura-e-souza/) <br />
**@Instagraam:** [@gabrielmoura.dev](https://www.instagram.com/gabrielmoura.dev/) <br />
