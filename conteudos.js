/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const ENCYCLOPEDIA_DATA = {
  "html": [
    {
      "id": "html-01",
      "title": "1. Conceito de Tags",
      "shortDesc": "As tags são a base absoluta do HTML, atuando como instruções que indicam ao navegador como estrutura...",
      "difficulty": "beginner",
      "estimatedTime": "5 min",
      "icon": "tag",
      "concept": "As tags são a base absoluta do HTML, atuando como instruções que indicam ao navegador como estruturar blocos individuais. No desenvolvimento de jogos, as tags definem desde a janela gráfica de exibição até botões de inventário e textos de diálogos. Quase todas funcionam em pares de abertura e fechamento, organizando a hierarquia visual.",
      "codeExample": "<img class=\"player-sprite\" src=\"hero.png\" />",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "As tags são a base absoluta do HTML, atuando como instruções que indicam ao navegador como estruturar blocos individuais. No desenvolvimento de jogos, as tags definem desde a janela gráfica de exibição até botões de inventário e textos de diálogos. Quase todas funcionam em pares de abertura e fechamento, organizando a hierarquia visual."
    },
    {
      "id": "html-02",
      "title": "2. Estrutura Global",
      "shortDesc": "Qualquer página moderna funcional exige uma estrutura global obrigatória iniciada com a declaração d...",
      "difficulty": "beginner",
      "estimatedTime": "5 min",
      "icon": "file-text",
      "concept": "Qualquer página moderna funcional exige uma estrutura global obrigatória iniciada com a declaração do tipo de documento. O arquivo é dividido entre o cabeçalho (dados invisíveis de configuração e fontes) e o corpo (onde tudo o que o usuário interage e visualiza realmente reside).",
      "codeExample": "<div class=\"gamedev-box\" id=\"menu-hud\">\n  <h2>Estrutura Global</h2>\n</div>",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Qualquer página moderna funcional exige uma estrutura global obrigatória iniciada com a declaração do tipo de documento. O arquivo é dividido entre o cabeçalho (dados invisíveis de configuração e fontes) e o corpo (onde tudo o que o usuário interage e visualiza realmente reside)."
    },
    {
      "id": "html-03",
      "title": "3. Tags de Texto",
      "shortDesc": "Utilizadas para exibir informações como falas de NPCs, pontuações e lore. Os títulos variam de relev...",
      "difficulty": "beginner",
      "estimatedTime": "5 min",
      "icon": "type",
      "concept": "Utilizadas para exibir informações como falas de NPCs, pontuações e lore. Os títulos variam de relevância de um a seis, enquanto parágrafos isolam linhas comuns. Tags extras de ênfase destacam palavras-chave como itens raros ou números de dano crítico.",
      "codeExample": "<div class=\"gamedev-box\" id=\"menu-hud\">\n  <h2>Tags de Texto</h2>\n</div>",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Utilizadas para exibir informações como falas de NPCs, pontuações e lore. Os títulos variam de relevância de um a seis, enquanto parágrafos isolam linhas comuns. Tags extras de ênfase destacam palavras-chave como itens raros ou números de dano crítico."
    },
    {
      "id": "html-04",
      "title": "4. Meta Tags Técnicas",
      "shortDesc": "Localizadas no cabeçalho invisível, configuram o comportamento técnico da aplicação. O padrão UTF-8 ...",
      "difficulty": "beginner",
      "estimatedTime": "5 min",
      "icon": "settings",
      "concept": "Localizadas no cabeçalho invisível, configuram o comportamento técnico da aplicação. O padrão UTF-8 garante a acentuação correta de textos em português, enquanto as diretivas de viewport adaptam automaticamente as proporções físicas do jogo para telas mobile.",
      "codeExample": "<div class=\"gamedev-box\" id=\"menu-hud\">\n  <h2>Meta Tags Técnicas</h2>\n</div>",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Localizadas no cabeçalho invisível, configuram o comportamento técnico da aplicação. O padrão UTF-8 garante a acentuação correta de textos em português, enquanto as diretivas de viewport adaptam automaticamente as proporções físicas do jogo para telas mobile."
    },
    {
      "id": "html-05",
      "title": "5. Atributos e IDs",
      "shortDesc": "Atributos adicionam propriedades especiais sobre as tags. O Identificador (ID) funciona como um regi...",
      "difficulty": "beginner",
      "estimatedTime": "5 min",
      "icon": "key",
      "concept": "Atributos adicionam propriedades especiais sobre as tags. O Identificador (ID) funciona como um registro único nacional de um elemento, impedindo repetições e permitindo que o motor lógico o manipule individualmente, enquanto classes agrupam estilos repetidos.",
      "codeExample": "<div class=\"gamedev-box\" id=\"menu-hud\">\n  <h2>Atributos e IDs</h2>\n</div>",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {
          "useDataAttr": true
        }
      },
      "tutorialHTML": "Atributos adicionam propriedades especiais sobre as tags. O Identificador (ID) funciona como um registro único nacional de um elemento, impedindo repetições e permitindo que o motor lógico o manipule individualmente, enquanto classes agrupam estilos repetidos."
    },
    {
      "id": "html-06",
      "title": "6. Links e Navegação",
      "shortDesc": "La tag de âncora conecta diferentes documentos pela internet ou cria atalhos internos. Em portais de...",
      "difficulty": "beginner",
      "estimatedTime": "5 min",
      "icon": "link-2",
      "concept": "La tag de âncora conecta diferentes documentos pela internet ou cria atalhos internos. Em portais de jogos, ela leva o jogador para manuais, créditos ou redes externas, permitindo forçar a abertura em abas secundárias sem encerrar o jogo ativo.",
      "codeExample": "<div class=\"gamedev-box\" id=\"menu-hud\">\n  <h2>Links e Navegação</h2>\n</div>",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "La tag de âncora conecta diferentes documentos pela internet ou cria atalhos internos. Em portais de jogos, ela leva o jogador para manuais, créditos ou redes externas, permitindo forçar a abertura em abas secundárias sem encerrar o jogo ativo."
    },
    {
      "id": "html-07",
      "title": "7. Listas de Inventário",
      "shortDesc": "Podem ser ordenadas sequencialmente por números ou não-ordenadas por marcadores gráficos. No gamedev...",
      "difficulty": "beginner",
      "estimatedTime": "5 min",
      "icon": "list-ordered",
      "concept": "Podem ser ordenadas sequencialmente por números ou não-ordenadas por marcadores gráficos. No gamedev, são as estruturas ideais para desenhar menus de habilidades, mochilas de itens ou logs dinâmicos de combate que se acumulam quadro a quadro.",
      "codeExample": "<div class=\"gamedev-box\" id=\"menu-hud\">\n  <h2>Listas de Inventário</h2>\n</div>",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Podem ser ordenadas sequencialmente por números ou não-ordenadas por marcadores gráficos. No gamedev, são as estruturas ideais para desenhar menus de habilidades, mochilas de itens ou logs dinâmicos de combate que se acumulam quadro a quadro."
    },
    {
      "id": "html-08",
      "title": "8. Inserção de Mídia",
      "shortDesc": "Tags dedicadas de imagens, áudios e vídeos trazem os recursos multimídia aos olhos e ouvidos do joga...",
      "difficulty": "beginner",
      "estimatedTime": "5 min",
      "icon": "image",
      "concept": "Tags dedicadas de imagens, áudios e vídeos trazem os recursos multimídia aos olhos e ouvidos do jogador. Atributos descritivos alternativos são indispensáveis para acessibilidade caso o carregamento falhe, definindo o conteúdo para cegos ou leitores robóticos.",
      "codeExample": "<div class=\"gamedev-box\" id=\"menu-hud\">\n  <h2>Inserção de Mídia</h2>\n</div>",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {
          "audioTrigger": true
        }
      },
      "tutorialHTML": "Tags dedicadas de imagens, áudios e vídeos trazem os recursos multimídia aos olhos e ouvidos do jogador. Atributos descritivos alternativos são indispensáveis para acessibilidade caso o carregamento falhe, definindo o conteúdo para cegos ou leitores robóticos."
    },
    {
      "id": "html-09",
      "title": "9. Containers Div",
      "shortDesc": "Funciona como caixas genéricas invisíveis usadas estritamente para agrupar outros elementos e estrut...",
      "difficulty": "beginner",
      "estimatedTime": "5 min",
      "icon": "box",
      "concept": "Funciona como caixas genéricas invisíveis usadas estritamente para agrupar outros elementos e estruturar layouts. É a ferramenta base usada para cercar e controlar grupos inteiros de interface, como painéis de pause ou HUDs de status coordenados.",
      "codeExample": "<div class=\"gamedev-box\" id=\"menu-hud\">\n  <h2>Containers Div</h2>\n</div>",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Funciona como caixas genéricas invisíveis usadas estritamente para agrupar outros elementos e estruturar layouts. É a ferramenta base usada para cercar e controlar grupos inteiros de interface, como painéis de pause ou HUDs de status coordenados."
    },
    {
      "id": "html-10",
      "title": "10. Comentários de Código",
      "shortDesc": "Trechos de anotações ignorados na renderização do navegador, servindo unicamente para orientar progr...",
      "difficulty": "beginner",
      "estimatedTime": "5 min",
      "icon": "message-square",
      "concept": "Trechos de anotações ignorados na renderização do navegador, servindo unicamente para orientar programadores na manutenção do projeto. Perfeito para delimitar onde se iniciam as seções do jogo ou desativar blocos antigos temporariamente sem apagá-los.",
      "codeExample": "<div class=\"gamedev-box\" id=\"menu-hud\">\n  <h2>Comentários de Código</h2>\n</div>",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Trechos de anotações ignorados na renderização do navegador, servindo unicamente para orientar programadores na manutenção do projeto. Perfeito para delimitar onde se iniciam as seções do jogo ou desativar blocos antigos temporariamente sem apagá-los."
    },
    {
      "id": "html-11",
      "title": "11. Elementos Semânticos (Header, Nav, Footer)",
      "shortDesc": "Tags com significado lógico estrutural que demarcam as zonas de topo, menus de navegação principal e...",
      "difficulty": "intermediate",
      "estimatedTime": "10 min",
      "icon": "book-open",
      "concept": "Tags com significado lógico estrutural que demarcam as zonas de topo, menus de navegação principal e rodapés conceituais. Melhoram consideravelmente a organização urbana do código e ajudam buscadores a indexar seu site.",
      "codeExample": "<div class=\"gamedev-box\" id=\"menu-hud\">\n  <h2>Elementos Semânticos (Header, Nav, Footer)</h2>\n</div>",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Tags com significado lógico estrutural que demarcam as zonas de topo, menus de navegação principal e rodapés conceituais. Melhoram consideravelmente a organização urbana do código e ajudam buscadores a indexar seu site."
    },
    {
      "id": "html-12",
      "title": "12. Seções de Conteúdo (Section, Article, Aside)",
      "shortDesc": "Permitem fatiar as áreas da página em porções independentes, como seções de estatísticas, cards autô...",
      "difficulty": "intermediate",
      "estimatedTime": "10 min",
      "icon": "book-open",
      "concept": "Permitem fatiar as áreas da página em porções independentes, como seções de estatísticas, cards autônomos de postagens e barras de chat laterais adicionais. Conferem clareza cirúrgica para que o CSS posicione cada bloco.",
      "codeExample": "<div class=\"gamedev-box\" id=\"menu-hud\">\n  <h2>Seções de Conteúdo (Section, Article, Aside)</h2>\n</div>",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Permitem fatiar as áreas da página em porções independentes, como seções de estatísticas, cards autônomos de postagens e barras de chat laterais adicionais. Conferem clareza cirúrgica para que o CSS posicione cada bloco."
    },
    {
      "id": "html-13",
      "title": "13. Estrutura de Tabelas Simples (Table, Tr, Td)",
      "shortDesc": "Utilizadas para organizar dados detalhados em divisões rígidas de linhas e colunas. No gamedev, são ...",
      "difficulty": "intermediate",
      "estimatedTime": "10 min",
      "icon": "book-open",
      "concept": "Utilizadas para organizar dados detalhados em divisões rígidas de linhas e colunas. No gamedev, são de enorme utilidade para comparar preços em mercados de vilarejos ou exibir atributos de força, defesa e velocidade de armas.",
      "codeExample": "<div class=\"gamedev-box\" id=\"menu-hud\">\n  <h2>Estrutura de Tabelas Simples (Table, Tr, Td)</h2>\n</div>",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Utilizadas para organizar dados detalhados em divisões rígidas de linhas e colunas. No gamedev, são de enorme utilidade para comparar preços em mercados de vilarejos ou exibir atributos de força, defesa e velocidade de armas."
    },
    {
      "id": "html-14",
      "title": "14. Cabeçalhos e Grupos de Tabela (Thead, Tbody, Tfoot)",
      "shortDesc": "Agrupamentos avançados de tabelas que separam semanticamente o cabeçalho dos dados, o corpo central ...",
      "difficulty": "intermediate",
      "estimatedTime": "10 min",
      "icon": "book-open",
      "concept": "Agrupamentos avançados de tabelas que separam semanticamente o cabeçalho dos dados, o corpo central dinâmico e o rodapé de valores totais. Oferece controle e facilita manter títulos sempre visíveis au rolar listagens de scores de jogadores.",
      "codeExample": "<div class=\"gamedev-box\" id=\"menu-hud\">\n  <h2>Cabeçalhos e Grupos de Tabela (Thead, Tbody, Tfoot)</h2>\n</div>",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Agrupamentos avançados de tabelas que separam semanticamente o cabeçalho dos dados, o corpo central dinâmico e o rodapé de valores totais. Oferece controle e facilita manter títulos sempre visíveis au rolar listagens de scores de jogadores."
    },
    {
      "id": "html-15",
      "title": "15. Formulários Básicos (Form, Input, Label)",
      "shortDesc": "Sistemas indispensáveis para captar dados do jogador. A área do formulário agrupa campos em que o us...",
      "difficulty": "intermediate",
      "estimatedTime": "10 min",
      "icon": "book-open",
      "concept": "Sistemas indispensáveis para captar dados do jogador. A área do formulário agrupa campos em que o usuário digita informações, enquanto rótulos conectam e descrevem a serventia de cada campo, melhorando cliques intuitivos.",
      "codeExample": "<div class=\"gamedev-box\" id=\"menu-hud\">\n  <h2>Formulários Básicos (Form, Input, Label)</h2>\n</div>",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Sistemas indispensáveis para captar dados do jogador. A área do formulário agrupa campos em que o usuário digita informações, enquanto rótulos conectam e descrevem a serventia de cada campo, melhorando cliques intuitivos."
    },
    {
      "id": "html-16",
      "title": "16. Tipos de Input (Text, Password, Email, Button)",
      "shortDesc": "Atributos que modificam completamente a finalidade física dos campos de digitação. Permitem ocultar ...",
      "difficulty": "intermediate",
      "estimatedTime": "10 min",
      "icon": "book-open",
      "concept": "Atributos que modificam completamente a finalidade física dos campos de digitação. Permitem ocultar senhas sob pontos por segurança, capturar e-mails e criar gatilhos clicáveis de validação para enviar dados ao servidor.",
      "codeExample": "<div class=\"gamedev-box\" id=\"menu-hud\">\n  <h2>Tipos de Input (Text, Password, Email, Button)</h2>\n</div>",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Atributos que modificam completamente a finalidade física dos campos de digitação. Permitem ocultar senhas sob pontos por segurança, capturar e-mails e criar gatilhos clicáveis de validação para enviar dados ao servidor."
    },
    {
      "id": "html-17",
      "title": "17. Seleções em Formulários (Radio, Checkbox, Select)",
      "shortDesc": "Permitem escolhas rápidas predefinidas. Os botões de rádio travam em seleções exclusivas (como escol...",
      "difficulty": "intermediate",
      "estimatedTime": "10 min",
      "icon": "book-open",
      "concept": "Permitem escolhas rápidas predefinidas. Os botões de rádio travam em seleções exclusivas (como escolha de gênero ou classe), caixas de verificação permitem seleções múltiplas e seleções suspensas economizam espaço do monitor.",
      "codeExample": "<div class=\"gamedev-box\" id=\"menu-hud\">\n  <h2>Seleções em Formulários (Radio, Checkbox, Select)</h2>\n</div>",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Permitem escolhas rápidas predefinidas. Os botões de rádio travam em seleções exclusivas (como escolha de gênero ou classe), caixas de verificação permitem seleções múltiplas e seleções suspensas economizam espaço do monitor."
    },
    {
      "id": "html-18",
      "title": "18. Validação Nativa de Formulários",
      "shortDesc": "Regras rápidas que checam se dados inseridos cumprem exigências básicas (como campos obrigatórios ou...",
      "difficulty": "intermediate",
      "estimatedTime": "10 min",
      "icon": "book-open",
      "concept": "Regras rápidas que checam se dados inseridos cumprem exigências básicas (como campos obrigatórios ou mínimo de caracteres) antes mesmo de acionar o processamento JavaScript, o que evita envios indesejados de dados vazios.",
      "codeExample": "<div class=\"gamedev-box\" id=\"menu-hud\">\n  <h2>Validação Nativa de Formulários</h2>\n</div>",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Regras rápidas que checam se dados inseridos cumprem exigências básicas (como campos obrigatórios ou mínimo de caracteres) antes mesmo de acionar o processamento JavaScript, o que evita envios indesejados de dados vazios."
    },
    {
      "id": "html-19",
      "title": "19. Introdução à Acessibilidade (Atributos ARIA)",
      "shortDesc": "Atributos que garantem navegabilidade democrática e inclusão para pessoas que dependem de leitores o...",
      "difficulty": "intermediate",
      "estimatedTime": "10 min",
      "icon": "book-open",
      "concept": "Atributos que garantem navegabilidade democrática e inclusão para pessoas que dependem de leitores ou braille. Descrevem o papel de barras de progresso virtuais e elementos gráficos customizados em tempo de execução.",
      "codeExample": "<div class=\"gamedev-box\" id=\"menu-hud\">\n  <h2>Introdução à Acessibilidade (Atributos ARIA)</h2>\n</div>",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Atributos que garantem navegabilidade democrática e inclusão para pessoas que dependem de leitores ou braille. Descrevem o papel de barras de progresso virtuais e elementos gráficos customizados em tempo de execução."
    },
    {
      "id": "html-20",
      "title": "20. A tag <dialog> (Modais Nativos)",
      "shortDesc": "Elemento nativo de alta tecnologia que gera pop-ups, janelas flutuantes de inventário ou menus de pa...",
      "difficulty": "intermediate",
      "estimatedTime": "10 min",
      "icon": "alert-circle",
      "concept": "Elemento nativo de alta tecnologia que gera pop-ups, janelas flutuantes de inventário ou menus de pause. Lida de forma automática com sombreamento de fundo e centralização física simples, eliminando dezenas de linhas estéticas no código.",
      "codeExample": "<div class=\"gamedev-box\" id=\"menu-hud\">\n  <h2>A tag <dialog> (Modais Nativos)</h2>\n</div>",
      "liveDemoConfig": {
        "type": "healthbar",
        "params": {
          "initialLife": 100
        }
      },
      "tutorialHTML": "Elemento nativo de alta tecnologia que gera pop-ups, janelas flutuantes de inventário ou menus de pause. Lida de forma automática com sombreamento de fundo e centralização física simples, eliminando dezenas de linhas estéticas no código."
    },
    {
      "id": "html-21",
      "title": "21. A tag <canvas> (O Palco dos Jogos)",
      "shortDesc": "A ferramenta suprema e palco absoluto no qual motores de jogos e scripts pintam, renderizam e animam...",
      "difficulty": "advanced",
      "estimatedTime": "15 min",
      "icon": "tv",
      "concept": "A ferramenta suprema e palco absoluto no qual motores de jogos e scripts pintam, renderizam e animam sprites, mapas, projéteis e partículas quadro a quadro através da velocidade extrema de renderização do contexto secundário bidimensional.",
      "codeExample": "<canvas id=\"arena-gamedev\" width=\"800\" height=\"600\"></canvas>",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {
          "drawSprite": true
        }
      },
      "tutorialHTML": "A ferramenta suprema e palco absoluto no qual motores de jogos e scripts pintam, renderizam e animam sprites, mapas, projéteis e partículas quadro a quadro através da velocidade extrema de renderização do contexto secundário bidimensional."
    },
    {
      "id": "html-22",
      "title": "22. SVG inline (<svg> e <path>)",
      "shortDesc": "Vetores gráficos injetados diretamente na codificação HTML que geram ícones de miras, escudos ou ite...",
      "difficulty": "advanced",
      "estimatedTime": "15 min",
      "icon": "book-open",
      "concept": "Vetores gráficos injetados diretamente na codificação HTML que geram ícones de miras, escudos ou itens que nunca perdem nitidez ou resolução ao serem redimensionados em telas monstruosas ultra-wide, economizando carregamento de imagens pesadas.",
      "codeExample": "<div class=\"gamedev-box\" id=\"menu-hud\">\n  <h2>SVG inline (<svg> e <path>)</h2>\n</div>",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Vetores gráficos injetados diretamente na codificação HTML que geram ícones de miras, escudos ou itens que nunca perdem nitidez ou resolução ao serem redimensionados em telas monstruosas ultra-wide, economizando carregamento de imagens pesadas."
    },
    {
      "id": "html-23",
      "title": "23. Imagens Responsivas (<picture> e srcset)",
      "shortDesc": "Tecnologia que analisa dinamicamente o tamanho físico do monitor do usuário e decide automaticamente...",
      "difficulty": "advanced",
      "estimatedTime": "15 min",
      "icon": "book-open",
      "concept": "Tecnologia que analisa dinamicamente o tamanho físico do monitor do usuário e decide automaticamente qual arquivo de textura carregar, entregando versões minúsculas e leves para celulares para reduzir consumo de banda móvel.",
      "codeExample": "<div class=\"gamedev-box\" id=\"menu-hud\">\n  <h2>Imagens Responsivas (<picture> e srcset)</h2>\n</div>",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Tecnologia que analisa dinamicamente o tamanho físico do monitor do usuário e decide automaticamente qual arquivo de textura carregar, entregando versões minúsculas e leves para celulares para reduzir consumo de banda móvel."
    },
    {
      "id": "html-24",
      "title": "24. Áudios Avançados (Atributos e Eventos de <audio>)",
      "shortDesc": "Permite que músicas épicas de fundo e efeitos sonoros ocorram nativamente e sem sobressaltos no nave...",
      "difficulty": "advanced",
      "estimatedTime": "15 min",
      "icon": "music",
      "concept": "Permite que músicas épicas de fundo e efeitos sonoros ocorram nativamente e sem sobressaltos no navegador. Suporta ativação cronometrada, loops contínuos e controle total de buffers de pré-carregamento de áudios em bastidores.",
      "codeExample": "<audio id=\"bgm-loop\" src=\"tema_floresta.mp3\" loop autoplay></audio>",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {
          "audioTrigger": true
        }
      },
      "tutorialHTML": "Permite que músicas épicas de fundo e efeitos sonoros ocorram nativamente e sem sobressaltos no navegador. Suporta ativação cronometrada, loops contínuos e controle total de buffers de pré-carregamento de áudios em bastidores."
    },
    {
      "id": "html-25",
      "title": "25. Pré-carregamento de Assets (preload e prefetch)",
      "shortDesc": "Diretivas declaradas no cabeçalho que informam ao navegador quais spritesheets e recursos pesados el...",
      "difficulty": "advanced",
      "estimatedTime": "15 min",
      "icon": "book-open",
      "concept": "Diretivas declaradas no cabeçalho que informam ao navegador quais spritesheets e recursos pesados ele deve baixar de forma prioritária em cache antes do início real da fase, evitando atrasos, travamentos estruturais ou vazios gráficos.",
      "codeExample": "<div class=\"gamedev-box\" id=\"menu-hud\">\n  <h2>Pré-carregamento de Assets (preload e prefetch)</h2>\n</div>",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Diretivas declaradas no cabeçalho que informam ao navegador quais spritesheets e recursos pesados ele deve baixar de forma prioritária em cache antes do início real da fase, evitando atrasos, travamentos estruturais ou vazios gráficos."
    },
    {
      "id": "html-26",
      "title": "26. Iframe Avançado (<iframe> e Sandbox)",
      "shortDesc": "Uma janela isolada que exibe páginas web inteiras dentro do seu jogo. Com comandos rígidos de sandbo...",
      "difficulty": "advanced",
      "estimatedTime": "15 min",
      "icon": "book-open",
      "concept": "Uma janela isolada que exibe páginas web inteiras dentro do seu jogo. Com comandos rígidos de sandbox, isola o script de páginas terceiras integradas (como rankings ou anúncios), blindando seu jogo contra tentativas de invasão e bugs.",
      "codeExample": "<div class=\"gamedev-box\" id=\"menu-hud\">\n  <h2>Iframe Avançado (<iframe> e Sandbox)</h2>\n</div>",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Uma janela isolada que exibe páginas web inteiras dentro do seu jogo. Com comandos rígidos de sandbox, isola o script de páginas terceiras integradas (como rankings ou anúncios), blindando seu jogo contra tentativas de invasão e bugs."
    },
    {
      "id": "html-27",
      "title": "27. Manipulação de Templates (<template> e <slot>)",
      "shortDesc": "Moldes fantasmas de HTML que residem invisíveis e silenciosos no código inicial. O JavaScript os clo...",
      "difficulty": "advanced",
      "estimatedTime": "15 min",
      "icon": "book-open",
      "concept": "Moldes fantasmas de HTML que residem invisíveis e silenciosos no código inicial. O JavaScript os clona de forma performática centenas de vezes preenchendo as ranhuras com novos dados de itens do inventário de forma instantânea.",
      "codeExample": "<div class=\"gamedev-box\" id=\"menu-hud\">\n  <h2>Manipulação de Templates (<template> e <slot>)</h2>\n</div>",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Moldes fantasmas de HTML que residem invisíveis e silenciosos no código inicial. O JavaScript os clona de forma performática centenas de vezes preenchendo as ranhuras com novos dados de itens do inventário de forma instantânea."
    },
    {
      "id": "html-28",
      "title": "28. Armazenamento no Navegador (O papel técnico do HTML5)",
      "shortDesc": "APIs de armazenamento interno permanentes e voláteis que salvam checkpoints, conquistas e configuraç...",
      "difficulty": "advanced",
      "estimatedTime": "15 min",
      "icon": "book-open",
      "concept": "APIs de armazenamento interno permanentes e voláteis que salvam checkpoints, conquistas e configurações na máquina local do usuário sem requerer servidores web ou bancos de dados externos complexos.",
      "codeExample": "<div class=\"gamedev-box\" id=\"menu-hud\">\n  <h2>Armazenamento no Navegador (O papel técnico do HTML5)</h2>\n</div>",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "APIs de armazenamento interno permanentes e voláteis que salvam checkpoints, conquistas e configurações na máquina local do usuário sem requerer servidores web ou bancos de dados externos complexos."
    },
    {
      "id": "html-29",
      "title": "29. Componentes Web Nativos (Custom Elements)",
      "shortDesc": "Permitem que os desenvolvedores estendam o vocabulário HTML, inventando tags encapsuladas personaliz...",
      "difficulty": "advanced",
      "estimatedTime": "15 min",
      "icon": "book-open",
      "concept": "Permitem que os desenvolvedores estendam o vocabulário HTML, inventando tags encapsuladas personalizadas de alta performance com lógica e estilos isolados e protegidos contra quebras físicas globais por osmose.",
      "codeExample": "<div class=\"gamedev-box\" id=\"menu-hud\">\n  <h2>Componentes Web Nativos (Custom Elements)</h2>\n</div>",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Permitem que os desenvolvedores estendam o vocabulário HTML, inventando tags encapsuladas personalizadas de alta performance com lógica e estilos isolados e protegidos contra quebras físicas globais por osmose."
    },
    {
      "id": "html-30",
      "title": "30. Acessibilidade de Teclado Avançada (tabindex e Foco)",
      "shortDesc": "Define a ordem de foco em que as teclas conduzem a navegação. Permite que interfaces imensas com loj...",
      "difficulty": "advanced",
      "estimatedTime": "15 min",
      "icon": "book-open",
      "concept": "Define a ordem de foco em que as teclas conduzem a navegação. Permite que interfaces imensas com lojas ou menus de fã-clubes sejam operadas perfeitamente por setas ou atalhos do teclado físico, dispensando o mouse.",
      "codeExample": "<div class=\"gamedev-box\" id=\"menu-hud\">\n  <h2>Acessibilidade de Teclado Avançada (tabindex e Foco)</h2>\n</div>",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Define a ordem de foco em que as teclas conduzem a navegação. Permite que interfaces imensas com lojas ou menus de fã-clubes sejam operadas perfeitamente por setas ou atalhos do teclado físico, dispensando o mouse."
    }
  ],
  "css": [
    {
      "id": "css-01",
      "title": "1. Seletores Básicos e Combinadores",
      "shortDesc": "Os seletores atuam como os sistemas de mira cirúrgica que localizam as caixas do HTML que devem ser ...",
      "difficulty": "beginner",
      "estimatedTime": "5 min",
      "icon": "mouse-pointer",
      "concept": "Os seletores atuam como os sistemas de mira cirúrgica que localizam as caixas do HTML que devem ser estilizadas (visando tags globais, classes compartilhadas ou IDs exclusivos). Conectados por combinadores (como filhos diretos ou descendentes aninhados), evitam repetições desnecessárias, criando hierarquias lógicas robustas que o navegador lê rapidamente.",
      "codeExample": ".game-actor {\n  /* Propriedades para Seletores Básicos e Combinadores */\n  transition: all 0.3s ease;\n}",
      "liveDemoConfig": {
        "type": "css-cursor",
        "params": {}
      },
      "tutorialHTML": "Os seletores atuam como os sistemas de mira cirúrgica que localizam as caixas do HTML que devem ser estilizadas (visando tags globais, classes compartilhadas ou IDs exclusivos). Conectados por combinadores (como filhos diretos ou descendentes aninhados), evitam repetições desnecessárias, criando hierarquias lógicas robustas que o navegador lê rapidamente."
    },
    {
      "id": "css-02",
      "title": "2. O Box Model (Modelo de Caixa)",
      "shortDesc": "Pilar estrutural absoluto onde toda tag vira uma caixa com quatro áreas concêntricas: conteúdo centr...",
      "difficulty": "beginner",
      "estimatedTime": "5 min",
      "icon": "box",
      "concept": "Pilar estrutural absoluto onde toda tag vira uma caixa com quatro áreas concêntricas: conteúdo central, enchimento de amortecimento interno, bordas limites e margem externa de afastamento. Ajustar isso com tamanho de borda travado é obrigatório para manter inventários simétricos impedindo fraturas estruturais inexplicáveis.",
      "codeExample": ".game-actor {\n  /* Propriedades para O Box Model (Modelo de Caixa) */\n  transition: all 0.3s ease;\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Pilar estrutural absoluto onde toda tag vira uma caixa com quatro áreas concêntricas: conteúdo central, enchimento de amortecimento interno, bordas limites e margem externa de afastamento. Ajustar isso com tamanho de borda travado é obrigatório para manter inventários simétricos impedindo fraturas estruturais inexplicáveis."
    },
    {
      "id": "css-03",
      "title": "3. Cores e Backgrounds",
      "shortDesc": "Controla todo o círculo cromático em tons sólidos e gradientes através de valores decimais e opacida...",
      "difficulty": "beginner",
      "estimatedTime": "5 min",
      "icon": "book-open",
      "concept": "Controla todo o círculo cromático em tons sólidos e gradientes através de valores decimais e opacidades ajustáveis. Permite carregar papéis de parede estéticos em cover, recalculando suas escalas de forma dinâmica para preencher todo o cenário visível de forma agradável no fundo.",
      "codeExample": ".game-actor {\n  /* Propriedades para Cores e Backgrounds */\n  transition: all 0.3s ease;\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Controla todo o círculo cromático em tons sólidos e gradientes através de valores decimais e opacidades ajustáveis. Permite carregar papéis de parede estéticos em cover, recalculando suas escalas de forma dinâmica para preencher todo o cenário visível de forma agradável no fundo."
    },
    {
      "id": "css-04",
      "title": "4. Tipografia Web",
      "shortDesc": "Dá voz estética ao seu jogo através do controle fino de fontes de texto importadas diretamente da in...",
      "difficulty": "beginner",
      "estimatedTime": "5 min",
      "icon": "book-open",
      "concept": "Dá voz estética ao seu jogo através do controle fino de fontes de texto importadas diretamente da internet. Domina pesos visuais, espaçamentos micrométricos e alturas de linhas para evitar que diálogos longos ou números de dano flutuante colapsem amontoados.",
      "codeExample": ".game-actor {\n  /* Propriedades para Tipografia Web */\n  transition: all 0.3s ease;\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Dá voz estética ao seu jogo através do controle fino de fontes de texto importadas diretamente da internet. Domina pesos visuais, espaçamentos micrométricos e alturas de linhas para evitar que diálogos longos ou números de dano flutuante colapsem amontoados."
    },
    {
      "id": "css-05",
      "title": "5. Unidades de Medida",
      "shortDesc": "Divide-se entre fixação absoluta baseada em pixels de fidelidade estética e frações relativas ajustá...",
      "difficulty": "beginner",
      "estimatedTime": "5 min",
      "icon": "book-open",
      "concept": "Divide-se entre fixação absoluta baseada em pixels de fidelidade estética e frações relativas ajustáveis às dimensões globais do ecrã das abas. O uso balanceado destas métricas confere elasticidade de proporção a barras e contêineres móveis em qualquer aparelho.",
      "codeExample": ".game-actor {\n  /* Propriedades para Unidades de Medida */\n  transition: all 0.3s ease;\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Divide-se entre fixação absoluta baseada em pixels de fidelidade estética e frações relativas ajustáveis às dimensões globais do ecrã das abas. O uso balanceado destas métricas confere elasticidade de proporção a barras e contêineres móveis em qualquer aparelho."
    },
    {
      "id": "css-06",
      "title": "6. Display Básico",
      "shortDesc": "Regula o comportamento gravitacional de distribuição inicial das caixas, separando-as em caixas que ...",
      "difficulty": "beginner",
      "estimatedTime": "5 min",
      "icon": "book-open",
      "concept": "Regula o comportamento gravitacional de distribuição inicial das caixas, separando-as em caixas que devorem toda a linha de largura do monitor, elementos que fluem lado a lado como palavras e blocos híbridos que alinham horizontalmente retendo dimensões exatas.",
      "codeExample": ".game-actor {\n  /* Propriedades para Display Básico */\n  transition: all 0.3s ease;\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Regula o comportamento gravitacional de distribuição inicial das caixas, separando-as em caixas que devorem toda a linha de largura do monitor, elementos que fluem lado a lado como palavras e blocos híbridos que alinham horizontalmente retendo dimensões exatas."
    },
    {
      "id": "css-07",
      "title": "7. Bordas e Arredondamentos",
      "shortDesc": "Trata do contorno, espessuras e cortes ao redor dos menus. Transforma caixas rígidas em botões agrad...",
      "difficulty": "beginner",
      "estimatedTime": "5 min",
      "icon": "book-open",
      "concept": "Trata do contorno, espessuras e cortes ao redor dos menus. Transforma caixas rígidas em botões agradáveis com cantos chanfrados ou perfis em círculos impecáveis, conferindo um design polido livre de pixelização estética em exibições de ponta.",
      "codeExample": ".game-actor {\n  /* Propriedades para Bordas e Arredondamentos */\n  transition: all 0.3s ease;\n}",
      "liveDemoConfig": {
        "type": "css-cursor",
        "params": {}
      },
      "tutorialHTML": "Trata do contorno, espessuras e cortes ao redor dos menus. Transforma caixas rígidas em botões agradáveis com cantos chanfrados ou perfis em círculos impecáveis, conferindo um design polido livre de pixelização estética em exibições de ponta."
    },
    {
      "id": "css-08",
      "title": "8. Sombras Simples",
      "shortDesc": "Aplica eixos de profundidade e halos de desfoques pretos em textos e painéis. Essencial para erguer ...",
      "difficulty": "beginner",
      "estimatedTime": "5 min",
      "icon": "book-open",
      "concept": "Aplica eixos de profundidade e halos de desfoques pretos em textos e painéis. Essencial para erguer janelas de novidades em destaque e, sobretudo, garantir legibilidade absoluta de legendas brancas sobre cenários mutáveis do jogo que possam atrapalhar a leitura.",
      "codeExample": ".game-actor {\n  /* Propriedades para Sombras Simples */\n  transition: all 0.3s ease;\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Aplica eixos de profundidade e halos de desfoques pretos em textos e painéis. Essencial para erguer janelas de novidades em destaque e, sobretudo, garantir legibilidade absoluta de legendas brancas sobre cenários mutáveis do jogo que possam atrapalhar a leitura."
    },
    {
      "id": "css-09",
      "title": "9. Estados Básicos (Pseudo-classes)",
      "shortDesc": "Captura as movimentações físicas instantâneas do mouse ou as seleções físicas por teclados. Altera c...",
      "difficulty": "beginner",
      "estimatedTime": "5 min",
      "icon": "book-open",
      "concept": "Captura as movimentações físicas instantâneas do mouse ou as seleções físicas por teclados. Altera cores de botões ao passar o ponteiro ou recua o botão ligeiramente no clique físico exato, devolvendo feedbacks visuais altamente satisfatórios.",
      "codeExample": ".game-actor {\n  /* Propriedades para Estados Básicos (Pseudo-classes) */\n  transition: all 0.3s ease;\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Captura as movimentações físicas instantâneas do mouse ou as seleções físicas por teclados. Altera cores de botões ao passar o ponteiro ou recua o botão ligeiramente no clique físico exato, devolvendo feedbacks visuais altamente satisfatórios."
    },
    {
      "id": "css-10",
      "title": "10. Variáveis CSS Nativas (Básico)",
      "shortDesc": "Centraliza valores recorrentes em uma raiz de escopo global. Guardando ali os tons de vidas, manas e...",
      "difficulty": "beginner",
      "estimatedTime": "5 min",
      "icon": "book-open",
      "concept": "Centraliza valores recorrentes em uma raiz de escopo global. Guardando ali os tons de vidas, manas e bordas, atualizar toda a identidade visual ou paleta de cores do seu jogo de RPG ocorre alterando uma única linha mestra no início do stylesheet.",
      "codeExample": ":root {\n  --vida-cor: #ef4444;\n  --mana-cor: #3b82f6;\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Centraliza valores recorrentes em uma raiz de escopo global. Guardando ali os tons de vidas, manas e bordas, atualizar toda a identidade visual ou paleta de cores do seu jogo de RPG ocorre alterando uma única linha mestra no início do stylesheet."
    },
    {
      "id": "css-11",
      "title": "11. Posicionamento (Position) e z-index",
      "shortDesc": "Domina a física espacial e de eixos na interface. Permite trancar o cabeçalho fixo à janela, travar ...",
      "difficulty": "intermediate",
      "estimatedTime": "10 min",
      "icon": "layers",
      "concept": "Domina a física espacial e de eixos na interface. Permite trancar o cabeçalho fixo à janela, travar coordenadas exatas absolutas em relação à caixa de radar do minimapa ou empilhar painéis por cima da câmera do canvas usando ordenações em camadas.",
      "codeExample": ".game-actor {\n  /* Propriedades para Posicionamento (Position) e z-index */\n  transition: all 0.3s ease;\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Domina a física espacial e de eixos na interface. Permite trancar o cabeçalho fixo à janela, travar coordenadas exatas absolutas em relação à caixa de radar do minimapa ou empilhar painéis por cima da câmera do canvas usando ordenações em camadas."
    },
    {
      "id": "css-12",
      "title": "12. Fundamentos do Flexbox",
      "shortDesc": "Distribui e alinha elementos em um único sentido direcional (linha ou coluna). Elimina contas de mar...",
      "difficulty": "intermediate",
      "estimatedTime": "10 min",
      "icon": "layout",
      "concept": "Distribui e alinha elementos em um único sentido direcional (linha ou coluna). Elimina contas de margem complicadas para centralizar o título e as opções de botões no meio absoluto da tela do usuário de maneira elegante e rápida de processar.",
      "codeExample": ".hud-superior {\n  display: flex;\n  justify-content: space-between;\n}",
      "liveDemoConfig": {
        "type": "shake",
        "params": {}
      },
      "tutorialHTML": "Distribui e alinha elementos em um único sentido direcional (linha ou coluna). Elimina contas de margem complicadas para centralizar o título e as opções de botões no meio absoluto da tela do usuário de maneira elegante e rápida de processar."
    },
    {
      "id": "css-13",
      "title": "13. Flexbox Avançado",
      "shortDesc": "Gerencia crescimentos, encolhimentos e quebras elásticas de linhas. Perfeito para preencher grades d...",
      "difficulty": "intermediate",
      "estimatedTime": "10 min",
      "icon": "layout",
      "concept": "Gerencia crescimentos, encolhimentos e quebras elásticas de linhas. Perfeito para preencher grades dinâmicas de mochilas onde os itens excedentes saltam organizadamente para novas linhas inferiores sem quebra visual da interface estruturada.",
      "codeExample": ".game-actor {\n  /* Propriedades para Flexbox Avançado */\n  transition: all 0.3s ease;\n}",
      "liveDemoConfig": {
        "type": "shake",
        "params": {}
      },
      "tutorialHTML": "Gerencia crescimentos, encolhimentos e quebras elásticas de linhas. Perfeito para preencher grades dinâmicas de mochilas onde os itens excedentes saltam organizadamente para novas linhas inferiores sem quebra visual da interface estruturada."
    },
    {
      "id": "css-14",
      "title": "14. Fundamentos do CSS Grid",
      "shortDesc": "Sistema de diagramação bidimensional extremamente rígido em linhas e colunas coordenadas. Perfeito p...",
      "difficulty": "intermediate",
      "estimatedTime": "10 min",
      "icon": "grid",
      "concept": "Sistema de diagramação bidimensional extremamente rígido em linhas e colunas coordenadas. Perfeito para quadros complexos de tabuleiros de cartas ou as bases matemáticas de campos táticos nas quais cada quadrante deve reter simetria mútua idêntica.",
      "codeExample": ".game-actor {\n  /* Propriedades para Fundamentos do CSS Grid */\n  transition: all 0.3s ease;\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Sistema de diagramação bidimensional extremamente rígido em linhas e colunas coordenadas. Perfeito para quadros complexos de tabuleiros de cartas ou as bases matemáticas de campos táticos nas quais cada quadrante deve reter simetria mútua idêntica."
    },
    {
      "id": "css-15",
      "title": "15. Pseudo-elementos (::before e ::after)",
      "shortDesc": "Injetam decorações estéticas vazias antes ou depois de tags reais sem poluir a codificação do HTML c...",
      "difficulty": "intermediate",
      "estimatedTime": "10 min",
      "icon": "book-open",
      "concept": "Injetam decorações estéticas vazias antes ou depois de tags reais sem poluir a codificação do HTML com tags redundantes. Útil para adicionar automaticamente etiquetas de preços com ícones pequenos de ouro no final de botões da loja.",
      "codeExample": ".game-actor {\n  /* Propriedades para Pseudo-elementos (::before e ::after) */\n  transition: all 0.3s ease;\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Injetam decorações estéticas vazias antes ou depois de tags reais sem poluir a codificação do HTML com tags redundantes. Útil para adicionar automaticamente etiquetas de preços com ícones pequenos de ouro no final de botões da loja."
    },
    {
      "id": "css-16",
      "title": "16. Transições Suaves (Transitions)",
      "shortDesc": "Interpola e suaviza a passagem visual de um estilo para outro. Se a vida do personagem cair, a mudan...",
      "difficulty": "intermediate",
      "estimatedTime": "10 min",
      "icon": "refresh-cw",
      "concept": "Interpola e suaviza a passagem visual de um estilo para outro. Se a vida do personagem cair, a mudança de escala ocorre em movimentos nítidos e graduais disparados pela GPU, retendo recursos térmicos e livres de perda de velocidade.",
      "codeExample": ".game-actor {\n  /* Propriedades para Transições Suaves (Transitions) */\n  transition: all 0.3s ease;\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Interpola e suaviza a passagem visual de um estilo para outro. Se a vida do personagem cair, a mudança de escala ocorre em movimentos nítidos e graduais disparados pela GPU, retendo recursos térmicos e livres de perda de velocidade."
    },
    {
      "id": "css-17",
      "title": "17. Transformações 2D (Transforms)",
      "shortDesc": "Fornece alterações de escala, rotação e translações físicas que trazem forte dinamismo ao design. É ...",
      "difficulty": "intermediate",
      "estimatedTime": "10 min",
      "icon": "book-open",
      "concept": "Fornece alterações de escala, rotação e translações físicas que trazem forte dinamismo ao design. É o segredo estético usado para fazer cartas de monstros flutuarem e inclinarem de lado ao colocar o mouse no topo delas nos tabuleiros visuais.",
      "codeExample": ".game-actor {\n  /* Propriedades para Transformações 2D (Transforms) */\n  transition: all 0.3s ease;\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Fornece alterações de escala, rotação e translações físicas que trazem forte dinamismo ao design. É o segredo estético usado para fazer cartas de monstros flutuarem e inclinarem de lado ao colocar o mouse no topo delas nos tabuleiros visuais."
    },
    {
      "id": "css-18",
      "title": "18. Design Responsivo (Media Queries)",
      "shortDesc": "Mapeia o tamanho estrito das telas e reorganiza os elementos de acordo com limites definidos de larg...",
      "difficulty": "intermediate",
      "estimatedTime": "10 min",
      "icon": "book-open",
      "concept": "Mapeia o tamanho estrito das telas e reorganiza os elementos de acordo com limites definidos de largura. Expande painéis amplos em telas gigantescas de desktop e empilha menus verticalmente para caberem confortavelmente em celulares modestos.",
      "codeExample": ".game-actor {\n  /* Propriedades para Design Responsivo (Media Queries) */\n  transition: all 0.3s ease;\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Mapeia o tamanho estrito das telas e reorganiza os elementos de acordo com limites definidos de largura. Expande painéis amplos em telas gigantescas de desktop e empilha menus verticalmente para caberem confortavelmente em celulares modestos."
    },
    {
      "id": "css-19",
      "title": "19. Pseudo-classes Avançadas",
      "shortDesc": "Seleciona com precisão matemática elementos baseado em sua exata posição em listas extensas de score...",
      "difficulty": "intermediate",
      "estimatedTime": "10 min",
      "icon": "book-open",
      "concept": "Seleciona com precisão matemática elementos baseado em sua exata posição em listas extensas de scores ou nega estilos por exclusão lógica (por exemplo, aplicando grayscale pesado e opacidades em todas as habilidades, menos nas que estão desbloqueadas).",
      "codeExample": ".game-actor {\n  /* Propriedades para Pseudo-classes Avançadas */\n  transition: all 0.3s ease;\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Seleciona com precisão matemática elementos baseado em sua exata posição em listas extensas de scores ou nega estilos por exclusão lógica (por exemplo, aplicando grayscale pesado e opacidades em todas as habilidades, menos nas que estão desbloqueadas)."
    },
    {
      "id": "css-20",
      "title": "20. Filtros Gráficos (Filters e Blend Modes)",
      "shortDesc": "Aplica retoques visuais de pós-processamento direto na tela em tempo real, como borrados belíssimos ...",
      "difficulty": "intermediate",
      "estimatedTime": "10 min",
      "icon": "book-open",
      "concept": "Aplica retoques visuais de pós-processamento direto na tela em tempo real, como borrados belíssimos de vidro fosco atrás da tela de pause, efeitos de grayscale quando a vida chega a zero ou modificações de saturação de cor no calor do jogo.",
      "codeExample": ".game-actor {\n  /* Propriedades para Filtros Gráficos (Filters e Blend Modes) */\n  transition: all 0.3s ease;\n}",
      "liveDemoConfig": {
        "type": "scanlines",
        "params": {}
      },
      "tutorialHTML": "Aplica retoques visuais de pós-processamento direto na tela em tempo real, como borrados belíssimos de vidro fosco atrás da tela de pause, efeitos de grayscale quando a vida chega a zero ou modificações de saturação de cor no calor do jogo."
    },
    {
      "id": "css-21",
      "title": "21. Animações Complexas com Keyframes",
      "shortDesc": "Define timelines completas divididas em etapas percentuais, permitindo saltos, giros e pulsações grá...",
      "difficulty": "advanced",
      "estimatedTime": "15 min",
      "icon": "activity",
      "concept": "Define timelines completas divididas em etapas percentuais, permitindo saltos, giros e pulsações gráficas contínuas de moedas girando ou poções borbulhando no HUD sem depender de processamento de clocks redundantes do JavaScript.",
      "codeExample": ".game-actor {\n  /* Propriedades para Animações Complexas com Keyframes */\n  transition: all 0.3s ease;\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Define timelines completas divididas em etapas percentuais, permitindo saltos, giros e pulsações gráficas contínuas de moedas girando ou poções borbulhando no HUD sem depender de processamento de clocks redundantes do JavaScript."
    },
    {
      "id": "css-22",
      "title": "22. Transformações 3D",
      "shortDesc": "Estabelece pontos focais tridimensionais no ecossistema do navegador, permitindo a botões, holografi...",
      "difficulty": "advanced",
      "estimatedTime": "15 min",
      "icon": "book-open",
      "concept": "Estabelece pontos focais tridimensionais no ecossistema do navegador, permitindo a botões, holografias e menus do diário real de missões tombarem para a frente ou dobrarem em ângulos no espaço geométrico real com aceleração gráfica plena de hardware.",
      "codeExample": ".game-actor {\n  /* Propriedades para Transformações 3D */\n  transition: all 0.3s ease;\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Estabelece pontos focais tridimensionais no ecossistema do navegador, permitindo a botões, holografias e menus do diário real de missões tombarem para a frente ou dobrarem em ângulos no espaço geométrico real com aceleração gráfica plena de hardware."
    },
    {
      "id": "css-23",
      "title": "23. CSS Grid Layout Avançado",
      "shortDesc": "Utiliza layouts baseados em strings nomeadas desenhando visualmente no próprio CSS a posição das áre...",
      "difficulty": "advanced",
      "estimatedTime": "15 min",
      "icon": "book-open",
      "concept": "Utiliza layouts baseados em strings nomeadas desenhando visualmente no próprio CSS a posição das áreas do HUD, o que facilita reorganizar por completo a estrutura em dispositivos móveis mundiais apenas alterando uma abreviação.",
      "codeExample": ".game-actor {\n  /* Propriedades para CSS Grid Layout Avançado */\n  transition: all 0.3s ease;\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Utiliza layouts baseados em strings nomeadas desenhando visualmente no próprio CSS a posição das áreas do HUD, o que facilita reorganizar por completo a estrutura em dispositivos móveis mundiais apenas alterando uma abreviação."
    },
    {
      "id": "css-24",
      "title": "24. Funções Matemáticas",
      "shortDesc": "Soluciona limites espaciais inline, misturando medidas em pixels com porcentagens móveis e travando ...",
      "difficulty": "advanced",
      "estimatedTime": "15 min",
      "icon": "book-open",
      "concept": "Soluciona limites espaciais inline, misturando medidas em pixels com porcentagens móveis e travando o tamanho de textos com valores mínimos e máximos ideais para impedir que o chat global extrapole margens em ecrãs ultra dimensionados.",
      "codeExample": ".game-actor {\n  /* Propriedades para Funções Matemáticas */\n  transition: all 0.3s ease;\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Soluciona limites espaciais inline, misturando medidas em pixels com porcentagens móveis e travando o tamanho de textos com valores mínimos e máximos ideais para impedir que o chat global extrapole margens em ecrãs ultra dimensionados."
    },
    {
      "id": "css-25",
      "title": "25. Clip-path e Formas Complexas",
      "shortDesc": "Permite recortar as caixas retangulares clássicas do HTML em polígonos, chanfraduras, hexágonos sci-...",
      "difficulty": "advanced",
      "estimatedTime": "15 min",
      "icon": "book-open",
      "concept": "Permite recortar as caixas retangulares clássicas do HTML em polígonos, chanfraduras, hexágonos sci-fi e miras arrojadas desenhadas por coordenadas poligonais que retêm precisão vetorial contundente sem apelar a imagens pesadas baixadas do servidor.",
      "codeExample": ".game-actor {\n  /* Propriedades para Clip-path e Formas Complexas */\n  transition: all 0.3s ease;\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Permite recortar as caixas retangulares clássicas do HTML em polígonos, chanfraduras, hexágonos sci-fi e miras arrojadas desenhadas por coordenadas poligonais que retêm precisão vetorial contundente sem apelar a imagens pesadas baixadas do servidor."
    },
    {
      "id": "css-26",
      "title": "26. Scroll Snapping e Scrollbars Estilizadas",
      "shortDesc": "Imanta a navegação de grandes listagens horizontais de personagens fazendo com que cada um trave de ...",
      "difficulty": "advanced",
      "estimatedTime": "15 min",
      "icon": "book-open",
      "concept": "Imanta a navegação de grandes listagens horizontais de personagens fazendo com que cada um trave de forma inteligente no centro da tela ao arrastar, complementado com a maquiagem estética de barras de rolagens com fundos transparentes.",
      "codeExample": ".game-actor {\n  /* Propriedades para Scroll Snapping e Scrollbars Estilizadas */\n  transition: all 0.3s ease;\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Imanta a navegação de grandes listagens horizontais de personagens fazendo com que cada um trave de forma inteligente no centro da tela ao arrastar, complementado com a maquiagem estética de barras de rolagens com fundos transparentes."
    },
    {
      "id": "css-27",
      "title": "27. Container Queries (@container)",
      "shortDesc": "A disrupção definitiva de interfaces modulares: altera o design de um componente baseando-se estrita...",
      "difficulty": "advanced",
      "estimatedTime": "15 min",
      "icon": "book-open",
      "concept": "A disrupção definitiva de interfaces modulares: altera o design de um componente baseando-se estritamente na largura física da caixa recipiente local que o abriga, e não no tamanho da tela global do celular do usuário conectado.",
      "codeExample": ".game-actor {\n  /* Propriedades para Container Queries (@container) */\n  transition: all 0.3s ease;\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "A disrupção definitiva de interfaces modulares: altera o design de um componente baseando-se estritamente na largura física da caixa recipiente local que o abriga, e não no tamanho da tela global do celular do usuário conectado."
    },
    {
      "id": "css-28",
      "title": "28. Arquitetura CSS (Metodologia BEM)",
      "shortDesc": "Sistema gramatical estruturado que nomeia classes com divisões nítidas de bloco, elemento interno e ...",
      "difficulty": "advanced",
      "estimatedTime": "15 min",
      "icon": "book-open",
      "concept": "Sistema gramatical estruturado que nomeia classes com divisões nítidas de bloco, elemento interno e modificadores estáticos, blindando grandes projetos de gamedev com dezenas de painéis contra conflitos estéticos inexplicáveis.",
      "codeExample": ".game-actor {\n  /* Propriedades para Arquitetura CSS (Metodologia BEM) */\n  transition: all 0.3s ease;\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Sistema gramatical estruturado que nomeia classes com divisões nítidas de bloco, elemento interno e modificadores estáticos, blindando grandes projetos de gamedev com dezenas de painéis contra conflitos estéticos inexplicáveis."
    },
    {
      "id": "css-29",
      "title": "29. Efeitos Visuais Modernos (Glassmorphism e Neumorphism)",
      "shortDesc": "Criação de interfaces baseadas em modas estéticas avançadas, simulando placas de vidro denso fosquea...",
      "difficulty": "advanced",
      "estimatedTime": "15 min",
      "icon": "book-open",
      "concept": "Criação de interfaces baseadas em modas estéticas avançadas, simulando placas de vidro denso fosqueado translúcido ou botões esculpidos que simulam relevos táteis que aparentam calcar a interface ao clique físico.",
      "codeExample": ".game-actor {\n  /* Propriedades para Efeitos Visuais Modernos (Glassmorphism e Neumorphism) */\n  transition: all 0.3s ease;\n}",
      "liveDemoConfig": {
        "type": "scanlines",
        "params": {}
      },
      "tutorialHTML": "Criação de interfaces baseadas em modas estéticas avançadas, simulando placas de vidro denso fosqueado translúcido ou botões esculpidos que simulam relevos táteis que aparentam calcar a interface ao clique físico."
    },
    {
      "id": "css-30",
      "title": "30. Integração de Variáveis CSS com JavaScript",
      "shortDesc": "Fusão máxima de lógica e arte: o ciclo JavaScript monitora a matemática e as coordenadas do motor do...",
      "difficulty": "advanced",
      "estimatedTime": "15 min",
      "icon": "book-open",
      "concept": "Fusão máxima de lógica e arte: o ciclo JavaScript monitora a matemática e as coordenadas do motor do jogo e injeta o percentual bruto de alteração de vida diretamente em uma variável nativa de CSS, deixando a placa de vídeo desenhar tudo de forma ultra veloz.",
      "codeExample": ".game-actor {\n  /* Propriedades para Integração de Variáveis CSS com JavaScript */\n  transition: all 0.3s ease;\n}",
      "liveDemoConfig": {
        "type": "lights",
        "params": {}
      },
      "tutorialHTML": "Fusão máxima de lógica e arte: o ciclo JavaScript monitora a matemática e as coordenadas do motor do jogo e injeta o percentual bruto de alteração de vida diretamente em uma variável nativa de CSS, deixando a placa de vídeo desenhar tudo de forma ultra veloz."
    }
  ],
  "js": [
    {
      "id": "js-01",
      "title": "1. Variáveis e Constantes (let e const)",
      "shortDesc": "Recipientes vitais de memória para armazenar e consultar valores no jogo. Usamos constantes para def...",
      "difficulty": "beginner",
      "estimatedTime": "5 min",
      "icon": "key",
      "concept": "Recipientes vitais de memória para armazenar e consultar valores no jogo. Usamos constantes para definir as leis imutáveis dos mundos virtuais (como coeficientes de gravidade) e variáveis flexíveis para estados dinâmicos (como as coordenadas físicas X e Y do herói correndo).",
      "codeExample": "const GRAVIDADE = 9.8;\nlet heroiX = 150;",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Recipientes vitais de memória para armazenar e consultar valores no jogo. Usamos constantes para definir as leis imutáveis dos mundos virtuais (como coeficientes de gravidade) e variáveis flexíveis para estados dinâmicos (como as coordenadas físicas X e Y do herói correndo)."
    },
    {
      "id": "js-02",
      "title": "2. Tipos de Dados Essenciais",
      "shortDesc": "O motor gerencia números para coordenar cálculos físicos e scores, cadeias textuais de caracteres (s...",
      "difficulty": "beginner",
      "estimatedTime": "5 min",
      "icon": "book-open",
      "concept": "O motor gerencia números para coordenar cálculos físicos e scores, cadeias textuais de caracteres (strings) para diálogos de NPCs e registros de missões, e chaves de tomadas lógicas (booleans) para chaves binárias rápidas (como atestar se a entidade toca no solo).",
      "codeExample": "// Lógica de Tipos de Dados Essenciais\nfunction iniciar() {\n  console.log(\"Iniciando...\");\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "O motor gerencia números para coordenar cálculos físicos e scores, cadeias textuais de caracteres (strings) para diálogos de NPCs e registros de missões, e chaves de tomadas lógicas (booleans) para chaves binárias rápidas (como atestar se a entidade toca no solo)."
    },
    {
      "id": "js-03",
      "title": "3. Operadores Matemáticos e Lógicos",
      "shortDesc": "Motores de cálculo que mudam posições através de somas e subtrações operadas a cada ciclo. Adjacente...",
      "difficulty": "beginner",
      "estimatedTime": "5 min",
      "icon": "book-open",
      "concept": "Motores de cálculo que mudam posições através de somas e subtrações operadas a cada ciclo. Adjacente a isso, operadores lógicos unem regras complexas de jogabilidade (por exemplo, permitindo saltar apenas se o usuário pressionar a barra de espaço E se a verificação de pés no solo estiver ativa).",
      "codeExample": "// Lógica de Operadores Matemáticos e Lógicos\nfunction iniciar() {\n  console.log(\"Iniciando...\");\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Motores de cálculo que mudam posições através de somas e subtrações operadas a cada ciclo. Adjacente a isso, operadores lógicos unem regras complexas de jogabilidade (por exemplo, permitindo saltar apenas se o usuário pressionar a barra de espaço E se a verificação de pés no solo estiver ativa)."
    },
    {
      "id": "js-04",
      "title": "4. Estruturas Condicionais (if, else, else if)",
      "shortDesc": "Pontos de decisão lógica que permitem à aplicação ditar comportamentos específicos com base em pergu...",
      "difficulty": "beginner",
      "estimatedTime": "5 min",
      "icon": "book-open",
      "concept": "Pontos de decisão lógica que permitem à aplicação ditar comportamentos específicos com base em perguntas constantes, como avaliar se o combustível acabou para interromper motores ou se o HP zerou para acionar a tela de fim de jogo.",
      "codeExample": "// Lógica de Estruturas Condicionais (if, else, else if)\nfunction iniciar() {\n  console.log(\"Iniciando...\");\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Pontos de decisão lógica que permitem à aplicação ditar comportamentos específicos com base em perguntas constantes, como avaliar se o combustível acabou para interromper motores ou se o HP zerou para acionar a tela de fim de jogo."
    },
    {
      "id": "js-05",
      "title": "5. Estruturas de Repetição (for e while)",
      "shortDesc": "Ciclos automatizados que realizam rotinas exaustivas de processamento de forma extremamente rápida. ...",
      "difficulty": "beginner",
      "estimatedTime": "5 min",
      "icon": "book-open",
      "concept": "Ciclos automatizados que realizam rotinas exaustivas de processamento de forma extremamente rápida. São de suma importância para varrer uma horda inteira de inimigos atualizando suas posições ou para polular centenas de estrelas decorativas de fundo proceduralmente.",
      "codeExample": "// Lógica de Estruturas de Repetição (for e while)\nfunction iniciar() {\n  console.log(\"Iniciando...\");\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Ciclos automatizados que realizam rotinas exaustivas de processamento de forma extremamente rápida. São de suma importância para varrer uma horda inteira de inimigos atualizando suas posições ou para polular centenas de estrelas decorativas de fundo proceduralmente."
    },
    {
      "id": "js-06",
      "title": "6. Introdução às Funções",
      "shortDesc": "Blocos de instruções isolados que embalam rotinas lógicas sob nomes específicos reutilizáveis e limp...",
      "difficulty": "beginner",
      "estimatedTime": "5 min",
      "icon": "book-open",
      "concept": "Blocos de instruções isolados que embalam rotinas lógicas sob nomes específicos reutilizáveis e limpos. Permitem que lógicas de sofrer dano, empurrar caixas ou realizar saltos ocorram de forma padronizada bastando invocar a função em instantes definidos.",
      "codeExample": "// Lógica de Introdução às Funções\nfunction iniciar() {\n  console.log(\"Iniciando...\");\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Blocos de instruções isolados que embalam rotinas lógicas sob nomes específicos reutilizáveis e limpos. Permitem que lógicas de sofrer dano, empurrar caixas ou realizar saltos ocorram de forma padronizada bastando invocar a função em instantes definidos."
    },
    {
      "id": "js-07",
      "title": "7. Arrays Simples (Listas)",
      "shortDesc": "Unidades de armazenamento unificado em filas indexadas que organizam mochilas de inventários, logs d...",
      "difficulty": "beginner",
      "estimatedTime": "5 min",
      "icon": "book-open",
      "concept": "Unidades de armazenamento unificado em filas indexadas que organizam mochilas de inventários, logs de diálogos acumulados e listas de sprites ordenados de animações, eliminando a criação de dezenas de variáveis redundantes dispersas.",
      "codeExample": "// Lógica de Arrays Simples (Listas)\nfunction iniciar() {\n  console.log(\"Iniciando...\");\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Unidades de armazenamento unificado em filas indexadas que organizam mochilas de inventários, logs de diálogos acumulados e listas de sprites ordenados de animações, eliminando a criação de dezenas de variáveis redundantes dispersas."
    },
    {
      "id": "js-08",
      "title": "8. Objetos Básicos (Chave e Valor)",
      "shortDesc": "Organiza conjuntos específicos em pacotes unificados de fichas de dados funcionais. Agrupa em um úni...",
      "difficulty": "beginner",
      "estimatedTime": "5 min",
      "icon": "book-open",
      "concept": "Organiza conjuntos específicos em pacotes unificados de fichas de dados funcionais. Agrupa em um único lugar o nome, a vida ativa, as coordenadas geométricas e as ações de disparo de um jogador, facilitando a passagem desse pacote para cálculos físicos.",
      "codeExample": "// Lógica de Objetos Básicos (Chave e Valor)\nfunction iniciar() {\n  console.log(\"Iniciando...\");\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Organiza conjuntos específicos em pacotes unificados de fichas de dados funcionais. Agrupa em um único lugar o nome, a vida ativa, as coordenadas geométricas e as ações de disparo de um jogador, facilitando a passagem desse pacote para cálculos físicos."
    },
    {
      "id": "js-09",
      "title": "9. Manipulação Básica do DOM (getElementById)",
      "shortDesc": "Conectores elétricos que unem a lógica oculta do script sob elementos gráficos do HTML. Usado intens...",
      "difficulty": "beginner",
      "estimatedTime": "5 min",
      "icon": "database",
      "concept": "Conectores elétricos que unem a lógica oculta do script sob elementos gráficos do HTML. Usado intensamente para atualizar strings de placares ou redimensionar barras de progresso de vidas de chefes desenhadas na interface.",
      "codeExample": "// Lógica de Manipulação Básica do DOM (getElementById)\nfunction iniciar() {\n  console.log(\"Iniciando...\");\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Conectores elétricos que unem a lógica oculta do script sob elementos gráficos do HTML. Usado intensamente para atualizar strings de placares ou redimensionar barras de progresso de vidas de chefes desenhadas na interface."
    },
    {
      "id": "js-10",
      "title": "10. Eventos de Teclado e Mouse (addEventListener)",
      "shortDesc": "Ouvintes discretos em constante prontidão que monitoram ações físicas de clique de mouses ou digitaç...",
      "difficulty": "beginner",
      "estimatedTime": "5 min",
      "icon": "book-open",
      "concept": "Ouvintes discretos em constante prontidão que monitoram ações físicas de clique de mouses ou digitação de controles físicos do teclado, convertendo inputs instantaneamente em eixos dinâmicos de movimentação das sprites.",
      "codeExample": "// Lógica de Eventos de Teclado e Mouse (addEventListener)\nfunction iniciar() {\n  console.log(\"Iniciando...\");\n}",
      "liveDemoConfig": {
        "type": "movement",
        "params": {}
      },
      "tutorialHTML": "Ouvintes discretos em constante prontidão que monitoram ações físicas de clique de mouses ou digitação de controles físicos do teclado, convertendo inputs instantaneamente em eixos dinâmicos de movimentação das sprites."
    },
    {
      "id": "js-11",
      "title": "11. O Game Loop e requestAnimationFrame",
      "shortDesc": "O motor de sincronização temporal. Substitui antigos repetidores lentos por ciclos que realizam a es...",
      "difficulty": "intermediate",
      "estimatedTime": "10 min",
      "icon": "refresh-cw",
      "concept": "O motor de sincronização temporal. Substitui antigos repetidores lentos por ciclos que realizam a esteira contínua de atualizar física, calcular posições e redesenhar tudo em sintonia imediata com a taxa de atualização do monitor do usuário.",
      "codeExample": "function gameLoop() {\n  update();\n  render();\n  requestAnimationFrame(gameLoop);\n}",
      "liveDemoConfig": {
        "type": "gameloop",
        "params": {}
      },
      "tutorialHTML": "O motor de sincronização temporal. Substitui antigos repetidores lentos por ciclos que realizam a esteira contínua de atualizar física, calcular posições e redesenhar tudo em sintonia imediata com a taxa de atualização do monitor do usuário."
    },
    {
      "id": "js-12",
      "title": "12. Delta Time (Movimento Suave)",
      "shortDesc": "Fator temporal adaptivo que compensa velocidades físicas calculando a distância exata de acordo com ...",
      "difficulty": "intermediate",
      "estimatedTime": "10 min",
      "icon": "book-open",
      "concept": "Fator temporal adaptivo que compensa velocidades físicas calculando a distância exata de acordo com o compasso de milissegundos passados entre frames, garantindo que o jogo corra com velocidade idêntica tanto em computadores potentes quanto em aparelhos lentos.",
      "codeExample": "// Lógica de Delta Time (Movimento Suave)\nfunction iniciar() {\n  console.log(\"Iniciando...\");\n}",
      "liveDemoConfig": {
        "type": "movement",
        "params": {}
      },
      "tutorialHTML": "Fator temporal adaptivo que compensa velocidades físicas calculando a distância exata de acordo com o compasso de milissegundos passados entre frames, garantindo que o jogo corra com velocidade idêntica tanto em computadores potentes quanto em aparelhos lentos."
    },
    {
      "id": "js-13",
      "title": "13. Classes e Construtores (POO)",
      "shortDesc": "Permite desenhar moldes arquitetônicos organizados para objetos no jogo. Define o modelo de um monst...",
      "difficulty": "intermediate",
      "estimatedTime": "10 min",
      "icon": "book-open",
      "concept": "Permite desenhar moldes arquitetônicos organizados para objetos no jogo. Define o modelo de um monstro para gerar dezenas de clones autônomos na tela com velocidades, vidas e aparências distintas gastando pouquíssimo código.",
      "codeExample": "// Lógica de Classes e Construtores (POO)\nfunction iniciar() {\n  console.log(\"Iniciando...\");\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Permite desenhar moldes arquitetônicos organizados para objetos no jogo. Define o modelo de um monstro para gerar dezenas de clones autônomos na tela com velocidades, vidas e aparências distintas gastando pouquíssimo código."
    },
    {
      "id": "js-14",
      "title": "14. Física de Pulo e Gravidade",
      "shortDesc": "Aplicações de gravidades simuladas por acelerações infinitesimais em vetores verticais que formam ar...",
      "difficulty": "intermediate",
      "estimatedTime": "10 min",
      "icon": "book-open",
      "concept": "Aplicações de gravidades simuladas por acelerações infinitesimais em vetores verticais que formam arcos perfeitos e decaimento dinâmico de saltos de plataformas, exigindo detecção física de solo para evitar impulsos adicionais indesejados no ar.",
      "codeExample": "// Lógica de Física de Pulo e Gravidade\nfunction iniciar() {\n  console.log(\"Iniciando...\");\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {
          "platformPhysics": true
        }
      },
      "tutorialHTML": "Aplicações de gravidades simuladas por acelerações infinitesimais em vetores verticais que formam arcos perfeitos e decaimento dinâmico de saltos de plataformas, exigindo detecção física de solo para evitar impulsos adicionais indesejados no ar."
    },
    {
      "id": "js-15",
      "title": "15. Colisão Retangular (AABB)",
      "shortDesc": "O algoritmo geométrico mais leve de detecção de colisões. Checa se retângulos invisíveis em volta de...",
      "difficulty": "intermediate",
      "estimatedTime": "10 min",
      "icon": "shield",
      "concept": "O algoritmo geométrico mais leve de detecção de colisões. Checa se retângulos invisíveis em volta de entidades cruzam as fronteiras do espaço ao mesmo tempo, de forma tão rápida que sua execução em hordas imensas não sobrecarrega a CPU.",
      "codeExample": "// Lógica de Colisão Retangular (AABB)\nfunction iniciar() {\n  console.log(\"Iniciando...\");\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {
          "showAABBDemo": true
        }
      },
      "tutorialHTML": "O algoritmo geométrico mais leve de detecção de colisões. Checa se retângulos invisíveis em volta de entidades cruzam as fronteiras do espaço ao mesmo tempo, de forma tão rápida que sua execução em hordas imensas não sobrecarrega a CPU."
    },
    {
      "id": "js-16",
      "title": "16. Animação e Spritesheets",
      "shortDesc": "Técnica que corta e exibe retângulos parciais sequenciais de uma única imagem gigante com sprites en...",
      "difficulty": "intermediate",
      "estimatedTime": "10 min",
      "icon": "book-open",
      "concept": "Técnica que corta e exibe retângulos parciais sequenciais de uma única imagem gigante com sprites enfileiradas através do contexto gráfico do canvas, temporizando as passagens de poses em milissegundos para gerar a ilusão de movimentos realistas.",
      "codeExample": "// Lógica de Animação e Spritesheets\nfunction iniciar() {\n  console.log(\"Iniciando...\");\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Técnica que corta e exibe retângulos parciais sequenciais de uma única imagem gigante com sprites enfileiradas através do contexto gráfico do canvas, temporizando as passagens de poses em milissegundos para gerar a ilusão de movimentos realistas."
    },
    {
      "id": "js-17",
      "title": "17. Controle de Estados Simples",
      "shortDesc": "Máquinas lógicas finitas que impedem animações de se sobreporem ou executarem ações mutuamente contr...",
      "difficulty": "intermediate",
      "estimatedTime": "10 min",
      "icon": "book-open",
      "concept": "Máquinas lógicas finitas que impedem animações de se sobreporem ou executarem ações mutuamente contraditórias (como tocar apose de corrida durante quedas aéreas livres), trancando o fluxo estático em categorias pré-definidas estanques.",
      "codeExample": "// Lógica de Controle de Estados Simples\nfunction iniciar() {\n  console.log(\"Iniciando...\");\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Máquinas lógicas finitas que impedem animações de se sobreporem ou executarem ações mutuamente contraditórias (como tocar apose de corrida durante quedas aéreas livres), trancando o fluxo estático em categorias pré-definidas estanques."
    },
    {
      "id": "js-18",
      "title": "18. Vetores e Movimentação 2D",
      "shortDesc": "Cálculos de senos, cossenos e tangentes que convertem a posição de miras e do mouse em orientações o...",
      "difficulty": "intermediate",
      "estimatedTime": "10 min",
      "icon": "book-open",
      "concept": "Cálculos de senos, cossenos e tangentes que convertem a posição de miras e do mouse em orientações omnidirecionais perfeitas de projéteis e naves espaciais, distribuindo velocidades de forma uniforme mesmo em movimentos diagonais rápidos.",
      "codeExample": "// Lógica de Vetores e Movimentação 2D\nfunction iniciar() {\n  console.log(\"Iniciando...\");\n}",
      "liveDemoConfig": {
        "type": "movement",
        "params": {}
      },
      "tutorialHTML": "Cálculos de senos, cossenos e tangentes que convertem a posição de miras e do mouse em orientações omnidirecionais perfeitas de projéteis e naves espaciais, distribuindo velocidades de forma uniforme mesmo em movimentos diagonais rápidos."
    },
    {
      "id": "js-19",
      "title": "19. Arrays e Gerenciamento de Entidades",
      "shortDesc": "Sistemas de filtragem reversa que varrem matrizes globais de elementos do jogo destruindo balas, rem...",
      "difficulty": "intermediate",
      "estimatedTime": "10 min",
      "icon": "book-open",
      "concept": "Sistemas de filtragem reversa que varrem matrizes globais de elementos do jogo destruindo balas, removendo moedas de ouro coletadas e dejetos de explosões para aliviar sistematicamente as alocações da memória ativa temporária.",
      "codeExample": "// Lógica de Arrays e Gerenciamento de Entidades\nfunction iniciar() {\n  console.log(\"Iniciando...\");\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Sistemas de filtragem reversa que varrem matrizes globais de elementos do jogo destruindo balas, removendo moedas de ouro coletadas e dejetos de explosões para aliviar sistematicamente as alocações da memória ativa temporária."
    },
    {
      "id": "js-20",
      "title": "20. Modularização (Módulos JS)",
      "shortDesc": "Importações e exportações ES6 de scripts isolados em arquivos estanques. Impede poluições de escopo ...",
      "difficulty": "intermediate",
      "estimatedTime": "10 min",
      "icon": "book-open",
      "concept": "Importações e exportações ES6 de scripts isolados em arquivos estanques. Impede poluições de escopo onde a variável global de um monstro invada o script do jogador principal, organizando o código em blocos compactos fáceis de depurar.",
      "codeExample": "// Lógica de Modularização (Módulos JS)\nfunction iniciar() {\n  console.log(\"Iniciando...\");\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Importações e exportações ES6 de scripts isolados em arquivos estanques. Impede poluições de escopo onde a variável global de um monstro invada o script do jogador principal, organizando o código em blocos compactos fáceis de depurar."
    },
    {
      "id": "js-21",
      "title": "21. Callbacks e Event Loop",
      "shortDesc": "Orquestra a execução assíncrona do JavaScript em fila única, agendando disparos automáticos (como de...",
      "difficulty": "advanced",
      "estimatedTime": "15 min",
      "icon": "clock",
      "concept": "Orquestra a execução assíncrona do JavaScript em fila única, agendando disparos automáticos (como detonação de armadilhas após segundos definidos) sem que isso cause qualquer congelamento físico de animações do jogo em primeiro plano.",
      "codeExample": "// Lógica de Callbacks e Event Loop\nfunction iniciar() {\n  console.log(\"Iniciando...\");\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Orquestra a execução assíncrona do JavaScript em fila única, agendando disparos automáticos (como detonação de armadilhas após segundos definidos) sem que isso cause qualquer congelamento físico de animações do jogo em primeiro plano."
    },
    {
      "id": "js-22",
      "title": "22. Promises (Promessas)",
      "shortDesc": "Contratos lógicos formais que garantem resoluções futuras no carregamento de dados pesados, servindo...",
      "difficulty": "advanced",
      "estimatedTime": "15 min",
      "icon": "book-open",
      "concept": "Contratos lógicos formais que garantem resoluções futuras no carregamento de dados pesados, servindo de base para manter telas estéticas de loading ativas de forma dinâmica e limpa até que as requisições se completem sem erros de falta de dados.",
      "codeExample": "// Lógica de Promises (Promessas)\nfunction iniciar() {\n  console.log(\"Iniciando...\");\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Contratos lógicos formais que garantem resoluções futuras no carregamento de dados pesados, servindo de base para manter telas estéticas de loading ativas de forma dinâmica e limpa até que as requisições se completem sem erros de falta de dados."
    },
    {
      "id": "js-23",
      "title": "23. Async / Await",
      "shortDesc": "Forma semântica limpa e intuitiva de escrever lógicas assíncronas de redes, imitando fluxos sequenci...",
      "difficulty": "advanced",
      "estimatedTime": "15 min",
      "icon": "book-open",
      "concept": "Forma semântica limpa e intuitiva de escrever lógicas assíncronas de redes, imitando fluxos sequenciais ordenados, garantindo que o motor só inicialize novos cenários ou mundos após todos os arquivos gráficos críticos estarem em cache seguros.",
      "codeExample": "// Lógica de Async / Await\nfunction iniciar() {\n  console.log(\"Iniciando...\");\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Forma semântica limpa e intuitiva de escrever lógicas assíncronas de redes, imitando fluxos sequenciais ordenados, garantindo que o motor só inicialize novos cenários ou mundos após todos os arquivos gráficos críticos estarem em cache seguros."
    },
    {
      "id": "js-24",
      "title": "24. Recursividade",
      "shortDesc": "Métodos fantásticos onde funções convocam a si mesmas em blocos paralelos controlados para desbravar...",
      "difficulty": "advanced",
      "estimatedTime": "15 min",
      "icon": "git-merge",
      "concept": "Métodos fantásticos onde funções convocam a si mesmas em blocos paralelos controlados para desbravar percursos multidimensionais em milissegundos, indispensável para limpar blocos em jogos de minas ou para o algoritmo detetive de busca por labirintos da IA.",
      "codeExample": "// Lógica de Recursividade\nfunction iniciar() {\n  console.log(\"Iniciando...\");\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Métodos fantásticos onde funções convocam a si mesmas em blocos paralelos controlados para desbravar percursos multidimensionais em milissegundos, indispensável para limpar blocos em jogos de minas ou para o algoritmo detetive de busca por labirintos da IA."
    },
    {
      "id": "js-25",
      "title": "25. Manipulação Avançada de Objetos",
      "shortDesc": "Métodos avançados de clonagem profunda, mutação e inspeção de chaves. Permitem mesclar atributos de ...",
      "difficulty": "advanced",
      "estimatedTime": "15 min",
      "icon": "book-open",
      "concept": "Métodos avançados de clonagem profunda, mutação e inspeção de chaves. Permitem mesclar atributos de itens imbuídos em tempo real (como fundir essências mágicas de veneno em lanças comuns) gerando novos dados de forma ágil.",
      "codeExample": "// Lógica de Manipulação Avançada de Objetos\nfunction iniciar() {\n  console.log(\"Iniciando...\");\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Métodos avançados de clonagem profunda, mutação e inspeção de chaves. Permitem mesclar atributos de itens imbuídos em tempo real (como fundir essências mágicas de veneno em lanças comuns) gerando novos dados de forma ágil."
    },
    {
      "id": "js-26",
      "title": "26. APIs e Fetch",
      "shortDesc": "Estabelece rotas de comunicação com a internet mundial, permitindo enviar conquistas e pontuações má...",
      "difficulty": "advanced",
      "estimatedTime": "15 min",
      "icon": "book-open",
      "concept": "Estabelece rotas de comunicação com a internet mundial, permitindo enviar conquistas e pontuações máximas para quadros globais mundiais ou baixar novas informações de saves de nuvens remotas protegendo dados contra tentativas locais de hacks.",
      "codeExample": "// Lógica de APIs e Fetch\nfunction iniciar() {\n  console.log(\"Iniciando...\");\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Estabelece rotas de comunicação com a internet mundial, permitindo enviar conquistas e pontuações máximas para quadros globais mundiais ou baixar novas informações de saves de nuvens remotas protegendo dados contra tentativas locais de hacks."
    },
    {
      "id": "js-27",
      "title": "27. Bitwise Operators (Operadores de Bit)",
      "shortDesc": "Operadores matemáticos e binários que manuseiam diretamente o nível mais baixo de energia e instruçõ...",
      "difficulty": "advanced",
      "estimatedTime": "15 min",
      "icon": "book-open",
      "concept": "Operadores matemáticos e binários que manuseiam diretamente o nível mais baixo de energia e instruções da máquina (zeros e uns literais), servindo de máscara ultra eficiente de filtros lógicos rápidos para validar colisões massivas de hordas.",
      "codeExample": "// Lógica de Bitwise Operators (Operadores de Bit)\nfunction iniciar() {\n  console.log(\"Iniciando...\");\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Operadores matemáticos e binários que manuseiam diretamente o nível mais baixo de energia e instruções da máquina (zeros e uns literais), servindo de máscara ultra eficiente de filtros lógicos rápidos para validar colisões massivas de hordas."
    },
    {
      "id": "js-28",
      "title": "28. Regular Expressions (Regex)",
      "shortDesc": "Foices abstratas de rastreio textual cirúrgico capazes de varrer longos diálogos, filtrar linguagens...",
      "difficulty": "advanced",
      "estimatedTime": "15 min",
      "icon": "book-open",
      "concept": "Foices abstratas de rastreio textual cirúrgico capazes de varrer longos diálogos, filtrar linguagens ofensivas em chats cooperativos ou sintonizar prompts digitados de cheats e códigos de auxílio limpando instruções caóticas.",
      "codeExample": "// Lógica de Regular Expressions (Regex)\nfunction iniciar() {\n  console.log(\"Iniciando...\");\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Foices abstratas de rastreio textual cirúrgico capazes de varrer longos diálogos, filtrar linguagens ofensivas em chats cooperativos ou sintonizar prompts digitados de cheats e códigos de auxílio limpando instruções caóticas."
    },
    {
      "id": "js-29",
      "title": "29. Memory Management (Garbage Collector)",
      "shortDesc": "Conhecimento profundo sobre descartes manuais de listeneres obsoletos e referências orquestradas par...",
      "difficulty": "advanced",
      "estimatedTime": "15 min",
      "icon": "book-open",
      "concept": "Conhecimento profundo sobre descartes manuais de listeneres obsoletos e referências orquestradas para nulidade no script, o que força o coletor interno a reciclar a memória RAM em níveis complexos preservando celulares modestos.",
      "codeExample": "// Lógica de Memory Management (Garbage Collector)\nfunction iniciar() {\n  console.log(\"Iniciando...\");\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Conhecimento profundo sobre descartes manuais de listeneres obsoletos e referências orquestradas para nulidade no script, o que força o coletor interno a reciclar a memória RAM em níveis complexos preservando celulares modestos."
    },
    {
      "id": "js-30",
      "title": "30. Design Patterns (Padrões de Projeto)",
      "shortDesc": "Padrões táticos consagrados mundialmente na engenharia de sistemas de grande escala (como Singleton ...",
      "difficulty": "advanced",
      "estimatedTime": "15 min",
      "icon": "book-open",
      "concept": "Padrões táticos consagrados mundialmente na engenharia de sistemas de grande escala (como Singleton e Padrão State) que isolam e estruturam grandes códigos em divisões independentes, blindando os projetos contra colapsos lógicos.",
      "codeExample": "// Lógica de Design Patterns (Padrões de Projeto)\nfunction iniciar() {\n  console.log(\"Iniciando...\");\n}",
      "liveDemoConfig": {
        "type": "canvas",
        "params": {}
      },
      "tutorialHTML": "Padrões táticos consagrados mundialmente na engenharia de sistemas de grande escala (como Singleton e Padrão State) que isolam e estruturam grandes códigos em divisões independentes, blindando os projetos contra colapsos lógicos."
    }
  ]
};

const CHALLENGE_DATA = [
  {
    id: 'ch-html-01',
    title: 'Desafio 1: Conceito de Tags',
    shortDesc: 'Corrija fechos de botões e avisos simples.',
    difficulty: 'beginner',
    category: 'html',
    xpValue: 100,
    instructions: `Um desenvolvedor iniciante errou os fechamentos das tags HTML. Ajuste o código abaixo corrigindo e fechando corretamente as tags de botão e de parágrafo.`,
    initialCode: `<button>Clique em mim<button>
<p>Este é um texto de aviso importante.<p>`,
    expectedKeywords: ["</button>","</p>"],
    testRunner: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      if (clean.includes('<button>cliqueemmim</button>') && clean.includes('<p>esteéumtextodeavisoimportante.</p>')) {
        return { success: true, message: 'Excelente! Você corrigiu perfeitamente as marcas de fechamento das tags!' };
      }
      return { success: false, message: 'Certifique-se de que fechou o botão com </button> e o parágrafo com </p>!' };
    },
    hint: ''
  },
  {
    id: 'ch-html-02',
    title: 'Desafio 2: Estrutura Global',
    shortDesc: 'Reorganize os nós e cabeçalhos primários.',
    difficulty: 'beginner',
    category: 'html',
    xpValue: 120,
    instructions: `A estrutura básica está toda misturada! Reorganize o cabeçalho <head> (que deve conter <title>) e o <body> (com o conteúdo principal <h1> e <p>) dentro da raiz <html>.`,
    initialCode: `<!DOCTYPE html>
<html>
  <body>
    <title>Minha Primeira Página</title>
  </body>
  <head>
    <h1>Bem-vindo ao meu site!</h1>
    <p>Aqui você encontrará meu portfólio.</p>
  </head>
</html>`,
    expectedKeywords: ["<head>","</head>","<body>","</body>"],
    testRunner: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      const ixHead = clean.indexOf('<head>');
      const ixTitle = clean.indexOf('<title>minhaprimeirapágina</title>');
      const ixEndHead = clean.indexOf('</head>');
      const ixBody = clean.indexOf('<body>');
      const ixH1 = clean.indexOf('<h1>bem-vindoaomeusite!</h1>');
      const ixP = clean.indexOf('<p>aquivocêencontrarámeuportfólio.</p>');
      const ixEndBody = clean.indexOf('</body>');

      if (ixHead !== -1 && ixTitle > ixHead && ixEndHead > ixTitle && ixBody > ixEndHead && ixH1 > ixBody && ixP > ixH1 && ixEndBody > ixP) {
        return { success: true, message: 'Maravilhoso! Estrutura global perfeitamente limpa e semântica!' };
      }
      return { success: false, message: 'Lembre-se de colocar a tag <head> com o <title> antes do <body> com o conteúdo!' };
    },
    hint: ''
  },
  {
    id: 'ch-html-03',
    title: 'Desafio 3: Tags de Texto',
    shortDesc: 'Seque e impeça que as tags se cruzem.',
    difficulty: 'beginner',
    category: 'html',
    xpValue: 100,
    instructions: `As tags <h2> e <p> estão sobrepostas de forma inválida. Arrume o trecho impedindo sobreposições desnecessárias fechando cada tag em sua devida ordem.`,
    initialCode: `<h2>O que é o Universo?<p>O universo é tudo o que existe, incluindo espaço, tempo e matéria.</h2></p>`,
    expectedKeywords: ["</h2>","</p>"],
    testRunner: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      if (clean.includes('<h2>oqueéouniverso?</h2><p>ouniversoétudooqueexiste,incluindoespaço,tempoematéria.</p>')) {
        return { success: true, message: 'Gabarito exato! As tags não se cruzam mais e seguem ordens perfeitas de hierarquia.' };
      }
      return { success: false, message: 'Feche o seu h2 com </h2> primeiro e depois abra o seu parágrafo <p> e feche com </p>!' };
    },
    hint: ''
  },
  {
    id: 'ch-html-04',
    title: 'Desafio 4: Meta Tags Técnicas',
    shortDesc: 'Insira meta de caracteres e responsividade.',
    difficulty: 'intermediate',
    category: 'html',
    xpValue: 150,
    instructions: `Certifique acentuação em português e proporções físicas do jogo para telas de aparelhos celulares adicionando no cabeçalho invisível <head> as declarações de charset UTF-8 e a meta viewport.`,
    initialCode: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <title>Painel de Controle</title>
</head>
<body>
    <h1>Configurações do Usuário</h1>
</body>
</html>`,
    expectedKeywords: ["charset=\"utf-8\"","viewport","width=device-width"],
    testRunner: (code) => {
      const clean = code.toLowerCase();
      if ((clean.includes('charset="utf-8"') || clean.includes("charset='utf-8'") || clean.includes("charset=utf-8")) && clean.includes('viewport') && clean.includes('width=device-width')) {
        return { success: true, message: 'Incrível! UTF-8 e Viewport configurados corretamente no <head>.' };
      }
      return { success: false, message: 'Insira a tag <meta charset="UTF-8"> e a tag de viewport no <head>!' };
    },
    hint: ''
  },
  {
    id: 'ch-html-05',
    title: 'Desafio 5: Atributos e IDs',
    shortDesc: 'Remova IDs repetidos e garanta CPF único.',
    difficulty: 'intermediate',
    category: 'html',
    xpValue: 150,
    instructions: `Três caixas de avisos foram definidas duplicando o mesmo ID de alerta incorretamente. Ajuste o código definindo IDs únicos ("alerta-sucesso", "alerta-aviso" e "alerta-erro") correspondentes aos seus propósitos.`,
    initialCode: `<div id="caixa-alerta">
  <p>Sucesso: Usuário cadastrado!</p>
</div>
<div id="caixa-alerta">
  <p>Aviso: Verifique seu e-mail.</p>
</div>
<div id="caixa-alerta">
  <p>Erro: Senha incorreta.</p>
</div>`,
    expectedKeywords: ["alerta-sucesso","alerta-aviso","alerta-erro"],
    testRunner: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      if (clean.includes('id="alerta-sucesso"') && clean.includes('id="alerta-aviso"') && clean.includes('id="alerta-erro"')) {
        return { success: true, message: 'Fantástico! Cada caixa de diálogo agora possui um identificador (ID) único e limpo!' };
      }
      return { success: false, message: 'Atualize os três IDs repetidos para "alerta-sucesso", "alerta-aviso" e "alerta-erro"!' };
    },
    hint: ''
  },
  {
    id: 'ch-html-06',
    title: 'Desafio 6: Elementos Semânticos',
    shortDesc: 'Converta caixas secas em links estruturados.',
    difficulty: 'intermediate',
    category: 'html',
    xpValue: 150,
    instructions: `Substitua caixas sem significado lógico por tags semânticas dedicadas do HTML5. Converta a caixa de topo para <header> e a de menu-principal para <nav>.`,
    initialCode: `<div id="cabecalho">
  <h1>Meu Portfólio</h1>
  <div id="menu-principal">
    <a href="/home">Início</a>
  </div>
</div>`,
    expectedKeywords: ["<header>","</header>","<nav>","</nav>"],
    testRunner: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      if (clean.includes('<header>') && clean.includes('</header>') && clean.includes('<nav>') && clean.includes('</nav>')) {
        return { success: true, message: 'Perfeito! As divisões genéricas se transformaram em componentes semânticos limpos do HTML5.' };
      }
      return { success: false, message: 'Substitua as divs pelas tags semânticas de cabeçalho <header> e navegação <nav>!' };
    },
    hint: ''
  },
  {
    id: 'ch-html-07',
    title: 'Missão 1: Calculadora HUD',
    shortDesc: 'Visor numérico e botões clicáveis.',
    difficulty: 'advanced',
    category: 'html',
    xpValue: 250,
    instructions: `Desenhe um input com ID "visor" que seja apenas leitura ("readonly") e botões que acionem ações clicáveis para montar sua calculadora HUD.`,
    initialCode: `<!-- Escreva seu visor protegido contra digitações e seus botões HUD -->
`,
    expectedKeywords: ["id=\"visor\"","readonly"],
    testRunner: (code) => {
      const clean = code.toLowerCase();
      if (clean.includes('id="visor"') && clean.includes('readonly')) {
        return { success: true, message: 'Espetacular! A sua calculadora HUD está pronta para receber pontuações!' };
      }
      return { success: false, message: 'Garanta que colocou um <input id="visor" readonly> no seu código!' };
    },
    hint: ''
  },
  {
    id: 'ch-html-08',
    title: 'Missão 2: Coordenação de Tabuleiros',
    shortDesc: 'Configure vetores de posições e checagens.',
    difficulty: 'advanced',
    category: 'html',
    xpValue: 250,
    instructions: `Em JavaScript, organize uma estrutura de tabuleiro com 9 posições vazias iniciais e declare uma variável de controle de turno para alternar as jogadas.`,
    initialCode: `// Inicialize seu tabuleiro e turno aqui
`,
    expectedKeywords: ["tabuleiro","turno"],
    testRunner: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      if (clean.includes('tabuleiro') && clean.includes('turno')) {
        return { success: true, message: 'Excelente! A lógica de coordenação do tabuleiro está estruturada com sucesso.' };
      }
      return { success: false, message: 'Declare as variáveis "tabuleiro" e "turno" de maneira limpa!' };
    },
    hint: ''
  },
  {
    id: 'ch-css-pointer',
    title: 'Ponteiro Pixelado',
    shortDesc: 'Mude o cursor do mouse do usuário para estilo de jogo.',
    difficulty: 'beginner',
    category: 'css',
    xpValue: 150,
    instructions: `Dentro de uma classe CSS chamada '.area-jogo', defina o cursor padrão para que aponte para um arquivo de imagem localizado em "mira.png" com fallback do navegador automático.`,
    initialCode: `.area-jogo {
  /* Escreva sua propriedade de cursor */
}`,
    expectedKeywords: ["cursor:","url(","mira.png","auto"],
    testRunner: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      if (!clean.includes('cursor:')) return { success: false, message: 'Adicione a propriedade cursor!' };
      if (!clean.includes('url(')) return { success: false, message: 'Use url(...) para apontar para a imagem mira.png' };
      if (!clean.includes('mira.png')) return { success: false, message: 'Mapeie o link correto para "mira.png"' };
      if (!clean.includes('auto')) return { success: false, message: 'Não se esqueça do fallback padrão "auto" no final!' };
      return { success: true, message: 'Genial! Agora a mira pixel-art de mira de tiro está sincronizada.' };
    },
    hint: ''
  },
  {
    id: 'ch-css-step',
    title: 'Ciclo de Sprite Discreto',
    shortDesc: 'Evite o embaçamento e arraste na animação de personagens Gamedev.',
    difficulty: 'intermediate',
    category: 'css',
    xpValue: 250,
    instructions: `Estilize a propriedade timing function de animação CSS para fazer uma transição de sprite cortando em 8 passos idênticos.`,
    initialCode: `.sprite-personagem {
  /* Escreva sua timing function */
}`,
    expectedKeywords: ["steps(8)"],
    testRunner: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      if (clean.includes('steps(8)')) {
        return { success: true, message: 'Excelente! steps(8) fatiará perfeitamente a spritesheet de 8 animações!' };
      }
      return { success: false, message: 'Não encontramos o fatiamento steps(8) exigido.' };
    },
    hint: ''
  },
  {
    id: 'ch-css-crt',
    title: 'Mesclagem CRT Retro',
    shortDesc: 'Como mesclar escaneamento de linhas com o canvas.',
    difficulty: 'advanced',
    category: 'css',
    xpValue: 400,
    instructions: `Qual propriedade CSS é utilizada para misturar a sobreposição das ranhuras CRT com as cores de fundo do canvas (ex: overlay/multiply)? Declare esta propriedade específica de misturas.`,
    initialCode: `.crt-overlay {
  /* Escreva a propriedade de mistura CSS */
}`,
    expectedKeywords: ["mix-blend-mode"],
    testRunner: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      if (clean.includes('mix-blend-mode:')) {
        return { success: true, message: 'Fabuloso! mix-blend-mode permite misturar scanlines de CRT como se fossem luzes físicas de pixels de TVs velhas.' };
      }
      return { success: false, message: 'Use a propriedade mix-blend-mode para mesclar cores!' };
    },
    hint: ''
  },
  {
    id: 'ch-js-loop',
    title: 'Executando o Loop Principal',
    shortDesc: 'Qual API do navegador comanda a taxa ideal de quadros para desenhos.',
    difficulty: 'beginner',
    category: 'js',
    xpValue: 150,
    instructions: `Escreva a chamada à função global nativa do JavaScript usada para requisitar que o navegador re-desenhe a tela na próxima atualização de quadros (passando o gameLoop como argumento).`,
    initialCode: `function gameLoop() {
  // ciclo continuo

  // Digite aqui o comando para invocar o proximo frame de gameLoop:
}`,
    expectedKeywords: ["requestanimationframe","gameloop"],
    testRunner: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      if (!clean.includes('requestanimationframe')) {
        return { success: false, message: 'Você precisa registrar a função de animação nativa.' };
      }
      if (!clean.includes('gameloop')) {
        return { success: false, message: 'Você precisa repassar o callback gameLoop para que continue rodando indefinidamente!' };
      }
      return { success: true, message: 'Fantástico! requestAnimationFrame se auto-calibra de acordo com a taxa física do monitor do jogador automáticamente.' };
    },
    hint: ''
  },
  {
    id: 'ch-js-aabb',
    title: 'Física de Colisão AABB',
    shortDesc: 'Calcule a lateral direita de um retângulo no universo customizado.',
    difficulty: 'intermediate',
    category: 'js',
    xpValue: 250,
    instructions: `Completar o cálculo que avalia a borda direita de um retângulo. Se o objeto de jogo \\\`player\\\` possui uma coordenada horizontal \\\`x\\\` e largura \\\`w\\\`, como obtemos a coordenada exata da sua borda direita? Escreva a expressão matemática simples.`,
    initialCode: `// Borda Direita = 
`,
    expectedKeywords: ["x","+","w"],
    testRunner: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      if (clean === 'player.x+player.w' || clean === 'x+w' || clean === 'player.x+w' || (clean.includes('x') && clean.includes('+') && clean.includes('w'))) {
        return { success: true, message: 'Estatística incrível! Somar a posição X com a largura total aponta a exata extremidade leste do corpo.' };
      }
      return { success: false, message: 'Certifique-se de somar a coordenada horizontal (x) com a respectiva largura (w)!' };
    },
    hint: ''
  },
  {
    id: 'ch-js-lerp',
    title: 'Movimentos Suaves (LERP)',
    shortDesc: 'Crie uma movimentação de câmera suave usando Interpolação Linear.',
    difficulty: 'advanced',
    category: 'js',
    xpValue: 400,
    instructions: `Para a suavização Linear (LERP), qual a fórmula curta que nos move da posição atual della câmera (cameraX) rumo ao playerX acelerado por um peso constante de suavização (0.1)? Escreva a fórmula de atualização de cameraX.`,
    initialCode: `cameraX = cameraX + 
`,
    expectedKeywords: ["playerx","camerax","0.1","*"],
    testRunner: (code) => {
      const clean = code.toLowerCase().replace(/\s+/g, '');
      if (clean.includes('playerx-camerax') && clean.includes('0.1')) {
        return { success: true, message: 'Sua câmera agora desliza de forma macia e elegante sobre o jogador principal! Excelente matemática de lerp.' };
      }
      return { success: false, message: 'Dica: A fórmula do LERP atualizado é cameraX += (playerX - cameraX) * 0.1' };
    },
    hint: ''
  }
];

if (typeof window !== 'undefined') {
  window.ENCYCLOPEDIA_DATA = ENCYCLOPEDIA_DATA;
  window.CHALLENGE_DATA = CHALLENGE_DATA;
}
