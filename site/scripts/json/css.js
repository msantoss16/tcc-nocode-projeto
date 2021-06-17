cssComponents = {
    "alinharConteudo": {
        "name": "Alinhar-Conteúdo",
        "css": "align-content",
        "description": "Especifica o alinhamento entre as linhas dentro de um contêiner flexível quando os itens não ocupam todo o espaço disponível",
        "syntax": "stretch|center|flex-start|flex-end|space-between|space-around|initial|inherit",
    },

    "alinharItens": {
        "name": "Alinhar-Itens",
        "css": "align-items",
        "description": "Especifica o alinhamento para itens dentro de um contêiner flexível",
        "syntax": "stretch|center|flex-start|flex-end|baseline|initial|inherit",
    },

    "alinhar-se": {
        "name": "Alinhar-se",
        "css": "align-self",
        "description": "Especifica o alinhamento para itens selecionados dentro de um contêiner flexível",
        "syntax": "auto|stretch|center|flex-start|flex-end|baseline|initial|inherit",
    },

    "tudo": {
        "name": "Tudo",
        "css": "all",
        "description": "Redefine todas as propriedades (exceto unicode-bidi e direção)",
        "syntax": "initial|inherit|unset",
    },

    "animacao": {
        "name": "Animação",
        "css": "animation",
        "description": "Uma propriedade abreviada para todas as propriedades de animação",
        "syntax": "name|duration|timing-function|delay|iteration-count|direction|fill-mode|play-state",
        "property": {
            "name": {
              "description": "Nome da animação",
              "example": "mymove"
            },
            
            "duration": {
                "description": "Especifica quantos segundos ou milissegundos uma animação leva para ser concluída",
                "example": "400ms | 1s"
            },
            
            "timing-function": {
                "description": "Especifica a curva de velocidade da animação",
                "example": "linear | ease-in"
            },

            "delay": {
                "description": "Especifica um atraso para o início de uma animação",
                "example": "400ms | 1s"
            },

            "iteration-count": {
                "description": "Especifica quantas vezes uma animação deve ser reproduzida",
                "example": "2 | 5"
            },

            "direction": {
                "description": "Especifica se a animação deve ou não ser reproduzida em reverso em ciclos alternados",
                "example": "alternate | reverse"
            },

            "fill-mode": {
                "description": "Especifica um estilo para o elemento quando a animação não está sendo reproduzida (antes de começar, depois de terminar ou ambos)",
                "example": "forwards | both"
            },

            "play-state": {
                "description": "Especifica se a animação está em execução ou pausada",
                "example": "paused | running"
            },
        },
    },

    "atrasoAnimacao": {
        "name": "Atraso-Animação",
        "css": "animation-delay",
        "description": "Especifica um atraso para o início de uma animação",
        "syntax": "time|initial|inherit",
        "property": {
            "time": {
              "description": "Tempo representado com cifra",
              "example": "400ms | 1s"
            }
        }
    },

    "direcaoAnimacao": {
        "name": "Direção-Animação",
        "css": "animation-direction",
        "description": "Especifica se a animação deve ou não ser reproduzida em reverso em ciclos alternados",
        "syntax": "normal|reverse|alternate|alternate-reverse|initial|inherit",
    },

    "duracaoAnimacao": {
        "name": "Duração-Animação",
        "css": "animation-duration",
        "description": "Especifica quantos segundos ou milissegundos uma animação leva para ser concluída",
        "syntax": "time|initial|inherit",
        "property":{
            "time": {
                "description": "Tempo representado com cifra",
                "example": "400ms | 1s"
            }
        }
    },

    "preenchimentoAnimacao": {
        "name": "Preenchimento-Animação",
        "css": "animation-fill-mode",
        "description": "Especifica um estilo para o elemento quando a animação não está sendo reproduzida (antes de começar, depois de terminar ou ambos)",
        "syntax": "none|forwards|backwards|both|initial|inherit",
    },

    "contadorAnimacao": {
        "name": "Contador-Interações-Animação",
        "css": "animation-iteration-count",
        "description": "Especifica quantas vezes uma animação deve ser reproduzida",
        "syntax": "number|infinite|initial|inherit",
        "property": {
            "number": {
                "description": "Um número que define quantas vezes uma animação deve ser reproduzida. O valor padrão é 1",
                "example": "2 | 5"
            }
        }
    },

    "nomeAnimacao": {
        "name": "Nome-Animação",
        "css": "animation-name",
        "description": "Nome da animação",
        "syntax": "keyframename|none|initial|inherit",
        "property": {
            "keyframename": {
                "description": "Especifica o nome do quadro-chave que você deseja vincular ao seletor ",
                "example": "primeiro-quadro-chave"
            }
        }
    },

    "estadoAnimacao": {
        "name": "Estado-Animação",
        "css": "animation-play-state",
        "description": "Especifica se a animação está em execução ou pausada",
        "syntax": "paused|running|initial|inherit",
    },

    "curvaAnimacao": {
        "name": "Curva-Velocidade-Animação",
        "css": "animation-timing-function",
        "description": "Especifica a curva de velocidade da animação",
        "syntax": "linear|ease|ease-in|ease-out|ease-in-out|step-start|step-end|steps(int,start|end)|cubic-bezier(n,n,n,n)|initial|inherit",
    },

    "visibilidadePosterior": {
        "name": "Visibilidade-Face-Posterior",
        "css": "backface-visibility",
        "description": "Define se a face posterior de um elemento deve ou não ser visível quando de frente para o usuário",
        "syntax": "visible|hidden|initial|inherit",
    },

    "fundo": {
        "name": "Plano-de-Fundo",
        "css": "background",
        "description": "Uma propriedade abreviada para todas as propriedades de plano de fundo",
        "syntax": "color|image|position|size|repeat|origin|clip|attachment|initial|inherit",
        "property": {
            "color": {
                "description": "Especifica a cor de fundo a ser usada",
                "example": "red | #FF0000 | rgb(255, 0, 0)"
            },

            "image": {
                "description": "Especifica uma ou mais imagens de fundo a serem usadas",
                "example": "url(sua-imagem-aqui.jpg)",
            },

            "position": {
                "description": "Especifica a posição das imagens de fundo",
                "example": "center | 25%",
            },

            "size": {
                "description": "Especifica o tamanho das imagens de fundo",
                "example": "cover | 100%",
            },

            "repeat": {
                "description": "Especifica como repetir as imagens de fundo",
                "example": "repeat | round",
            },

            "origin": {
                "description": "Especifica a área de posicionamento das imagens de fundo",
                "example": "content-box | border-box",
            },

            "clip": {
                "description": "Especifica a área de pintura das imagens de fundo",
                "example": "content-box | border-box",
            },

            "attachment": {
                "description": "Especifica se as imagens de fundo são fixas ou rolam com o resto da página",
                "example": "scroll | fixed",
            }
        }
    },

    "ligacaoFundo": {
        "name": "LigaçãoFundo",
        "css": "background-attachment",
        "description": "Especifica se as imagens de fundo são fixas ou rolam com o resto da página",
        "syntax": "scroll|fixed|local|initial|inherit",
    },

    "mesclagemFundo": {
        "name": "Mesclagem-Fundo",
        "css": "background-blend-mode",
        "description": "Especifica o modo de mesclagem de cada camada de fundo (cor / imagem)",
        "syntax": "normal|multiply|screen|overlay|darken|lighten|color-dodge|saturation|color|luminosity",
    },

    "limiteFundo": {
        "name": "Limite-Fundo",
        "css": "background-clip",
        "description": "Define até onde o fundo (cor ou imagem) deve se estender dentro de um elemento",
        "syntax": "border-box|padding-box|content-box|initial|inherit",
    },

    "corFundo": {
        "name": "Cor-Fundo",
        "css": "background-color",
        "description": "Especifica a cor de fundo de um elemento",
        "syntax": "color|transparent|initial|inherit",
        "property": {
            "color": {
                "description": "Especifica a cor de fundo",
                "example": "red | #FF0000 | rgb(255, 0, 0)"
            }
        }
    },

    "imagemFundo": {
        "name": "Imagem-Fundo",
        "css": "background-image",
        "description": "Especifica uma ou mais imagens de fundo para um elemento",
        "syntax": "url|none|initial|inherit",
        "property": {
            "url": {
                "description": "O URL da imagem. Para especificar mais de uma imagem, separe os URLs com uma vírgula",
                "example": "url(primeira-imagem.jpg)"
            }
        }
    },

    "origemFundo": {
        "name": "Origem-Imagem-Fundo",
        "css": "background-origin",
        "description": "Especifica a posição de origem de uma imagem de fundo",
        "syntax": "padding-box|border-box|content-box|initial|inherit",
    },

    "posicaoFundo": {
        "name": "Posição-Imagem-Fundo",
        "css": "background-origin",
        "description": "Especifica a posição de origem de uma imagem de fundo",
        "syntax": "value",
        "property": {
            "value": {
                "description": "Posição inicial da imagem",
                "example": "center | right bottom | 25%"
            }
        }
    },

    "repeticaoFundo": {
        "name": "Repetição-Imagem-Fundo",
        "css": "background-repeat",
        "description": "Define a repetição da imagem do plano de fundo",
        "syntax": "repeat|repeat-x|repeat-y|no-repeat|initial|inherit",
    },

    "tamanhoFundo": {
        "name": "Tamanho-Imagem-Fundo",
        "css": "background-size",
        "description": "Especifica o tamanho das imagens de fundo",
        "syntax": "lenght|auto|cover|contain|initial|inherit",
        "property": {
            "lenght": {
                "description": "Define o comprimento e altura da imagem de fundo",
                "example": "300px 200px | 5rem | 60%"
            }
        }
    },

    "borda": {
        "name": "Borda",
        "css": "border",
        "description": "Uma propriedade abreviada para estilizar a borda de um elemento",
        "syntax": "border-width|border-style|border-color|initial|inherit",
        "property": {
            "border-width": {
                "description": "Define a largura da borda",
                "example": "thin | 2px"
            },

            "border-style": {
                "description": "Define o estilo da borda",
                "example": "dotted | solid"
            },

            "border-style": {
                "description": "Define a cor da borda",
                "example": "red | #FF0000 | rgb(255, 0, 0)"
            },
        }
    },

    "bordaInferior": {
        "name": "Borda-Inferior",
        "css": "background-bottom",
        "description": "Uma propriedade abreviada para estilizar a borda inferior de um elemento",
        "syntax": "border-width border-style border-color|initial|inheritt",
        "property": {
            "border-width": {
                "description": "Define a largura da borda inferior",
                "example": "thin | 2px"
            },

            "border-style": {
                "description": "Define o estilo da borda inferior",
                "example": "dotted | solid"
            },

            "border-color": {
                "description": "Define a cor da borda inferior",
                "example": "red | #FF0000 | rgb(255, 0, 0)"
            },
        }
    },

    "corBordaInferior": {
        "name": "Cor-Borda-Inferior",
        "css": "background-bottom-color",
        "description": "Uma propriedade abreviada para estilizar a borda inferior de um elemento",
        "syntax": "color|transparent|initial|inherit",
        "property": {
            "color": {
                "description": "Define a cor da borda inferior",
                "example": "red | #FF0000 | rgb(255, 0, 0)"
            },
        }
    },

    "raioBordaInferiorEsquerda": {
        "name": "Raio-Borda-Inferior-Esquerda",
        "css": "border-bottom-left-radius",
        "description": "Define o raio do canto inferior esquerdo",
        "syntax": "length|%|initial|inherit",
        "property": {
            "lenght": {
                "description": "Define a forma do canto inferior esquerdo",
                "example": "50px | 50px 20px"
            },
        }
    },

    "raioBordaInferiorDireita": {
        "name": "Raio-Borda-Inferior-Direita",
        "css": "border-bottom-right-radius",
        "description": "Define o raio do canto inferior direito",
        "syntax": "length|%|initial|inherit",
        "property": {
            "lenght": {
                "description": "Define a forma do canto inferior direito",
                "example": "50px | 50px 20px"
            },

            "%": {
                "description": "Define a forma do canto inferior direito",
                "example": "25%"
            },
        }
    },

    "estiloBordaInferior": {
        "name": "Estilo-Borda-Inferior",
        "css": "border-bottom-style",
        "description": "Define o estilo da borda inferior",
        "syntax": "none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|initial|inherit",
    },

    "larguraBordaInferior": {
        "name": "Largura-Borda-Inferior",
        "css": "border-bottom-width",
        "description": "Define a largura da borda inferior",
        "syntax": "lenght|medium|thin|thick|initial|inherit",
        "property": {
            "lenght": {
                "description": "Define a espessura da borda inferior",
                "example": "2px"
            },
        }
    },

    "separacaoBorda": {
        "name": "Separação-Borda",
        "css": "border-collapse",
        "description": "Define se as bordas da tabela devem ser recolhidas em uma única borda ou separadas",
        "syntax": "separate|collapse|initial|inherit",
    },

    "corBorda": {
        "name": "Cor-Borda",
        "css": "border-color",
        "description": "Define a cor das quatro bordas ",
        "syntax": "color|transparent|initial|inherit",
        "property": {
            "color": {
                "description": "Define a cor da borda",
                "example": "red | #FF0000 | rgb(255, 0, 0)"
            },
        }
    },

    "imagemBorda": {
        "name": "Separação-Borda",
        "css": "border-image",
        "description": "Uma propriedade abreviada para todas propriedades de borda de imagem",
        "syntax": "source|slice|width|outset|repeat|initial|inherit",
        "property": {
            "source": {
                "description": "O caminho para a imagem a ser usado como borda",
                "example": "url(sua-imagem-aqui.jpg)"
            },

            "slice": {
                "description": "Forma de corte da imagem da borda",
                "example": "20%"
            },

            "width": {
                "description": "Largura da imagem da borda",
                "example": "2px"
            },

            "outset": {
                "description": "A largura da borda que se estende além da caixa",
                "example": "2px"
            },

            "repeat": {
                "description": "Especifica se a imagem da borda deve ser repetida, arredondada ou esticada",
                "example": "repeat | round"
            },
        }
    },

    "imagemBordaInicio": {
        "name": "Imagem-Borda-Inicio",
        "css": "border-image-outset",
        "description": "O largura da borda que se estende além da caixa",
        "syntax": "length|number|initial|inherit",
        "property": {
            "lenght": {
                "description": "Define o largura da borda",
                "example": "2px"
            },
        }
    },

    "repetiçãoImagemBorda": {
        "name": "Repetição-Imagem-Borda",
        "css": "border-image-repeat",
        "description": "Especifica se a imagem da borda deve ser repetida, arredondada ou esticada",
        "syntax": "stretch|repeat|round|initial|inherit",
    },

    "corteImagemBorda": {
        "name": "Corte-Imagem-Borda",
        "css": "border-image-slice",
        "description": "Forma de corte da imagem da borda",
        "syntax": "number|%|fill|initial|inherit",
        "property":{
            "number":{
                "description": "Representa pixels para imagens rasterizadas ou coordenadas para imagens vetoriais",
                "example": "10 | 20 25"
            },

            "%":{
                "description": "Porcentagem relativas à altura ou largura da imagem",
                "example": "25%"
            }
        }
    },

    "raizImagemBorda": {
        "name": "Raiz-Imagem-Borda",
        "css": "border-image-source",
        "description": "O caminho para a imagem a ser usado como borda",
        "syntax": "url|none|initial|inherit",
        "property":{
            "url":{
                "description": "O caminho para a imagem a ser usado como borda",
                "example": "url(sua-imagem-aqui.jpg)"
            }
        }
    },

    "larguraImagemBorda": {
        "name": "Largura-Imagem-Borda",
        "css": "border-image-width",
        "description": "Especifica a largura da imagem da borda",
        "syntax": "number|lenght|%|auto|initial|inherit",
        "property":{
            "number":{
                "description": "Representa múltiplos da largura da borda",
                "example": "2 | 2 3"
            },

            "lenght":{
                "description": "Representa múltiplos da largura da borda",
                "example": "2px"
            },

            "%":{
                "description": "A largura da área para deslocamentos horizontais, a altura para deslocamentos verticais ",
                "example": "25%"
            },
        }
    },

    "bordaEsquerda": {
        "name": "Borda-Esquerda",
        "css": "border-left",
        "description": "Uma propriedade abreviada para todas as propriedades de borda esquerda",
        "syntax": "border-width|border-style|border-color|initial|inherit",
        "property": {
            "border-width": {
                "description": "Define a largura da borda esquerda",
                "example": "thin | 2px"
            },

            "border-style": {
                "description": "Define o estilo da borda esquerda",
                "example": "dotted | solid"
            },

            "border-color": {
                "description": "Define a cor da borda esquerda",
                "example": "red | #FF0000 | rgb(255, 0, 0)"
            },
        }
    },

    "corBordaEsquerda": {
        "name": "Cor-Borda-Esquerda",
        "css": "border-left-color",
        "description": "Define a cor da borda esquerda",
        "syntax": "color|transparent|initial|inherit",
        "property": {
            "color": {
                "description": "Define a cor da borda esquerda",
                "example": "red | #FF0000 | rgb(255, 0, 0)"
            },
        }
    },

    "estiloBordaEsquerda": {
        "name": "Estilo-Borda-Esquerda",
        "css": "border-left-style",
        "description": "Define o estilo da borda esquerda",
        "syntax": "none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|initial|inherit",
    },

    "larguraBordaEsquerda": {
        "name": "Largura-Borda-Esquerda",
        "css": "border-left-width",
        "description": "Define a largura da borda esquerda",
        "syntax": "lenght|medium|thin|thick|initial|inherit",
        "property": {
            "lenght": {
                "description": "Define o largura da borda esquerda",
                "example": "2px"
            },
        }
    },

    "raioBorda": {
        "name": "Raio-Borda",
        "css": "border-radius",
        "description": "Uma propriedade abreviada para as quatro propriedades de raio de borda",
        "syntax": "lenght|%|initial|inherit",
        "property": {
            "lenght": {
                "description": "Define a forma dos cantos",
                "example": "2px"
            },

            "%": {
                "description": "Define a forma dos cantos",
                "example": "25%"
            },
        }
    },

    "bordaDireita": {
        "name": "Borda-Direita",
        "css": "border-right",
        "description": "Uma propriedade abreviada para todas as propriedades de borda direita",
        "syntax": "border-width|border-style|border-color|initial|inherit",
        "property": {
            "border-width": {
                "description": "Define a largura da borda direita",
                "example": "thin | 2px"
            },

            "border-style": {
                "description": "Define o estilo da borda direita",
                "example": "dotted | solid"
            },

            "border-color": {
                "description": "Define a cor da borda direita",
                "example": "red | #FF0000 | rgb(255, 0, 0)"
            },
        }
    },

    "corBordaDireita": {
        "name": "Cor-Borda-Direita",
        "css": "border-right-color",
        "description": "Define a cor da borda direita",
        "syntax": "color|transparent|initial|inherit",
        "property": {
            "color": {
                "description": "Define a cor da borda direita",
                "example": "red | #FF0000 | rgb(255, 0, 0)"
            },
        }
    },

    "estiloBordaDireita": {
        "name": "Estilo-Borda-Direita",
        "css": "border-right-style",
        "description": "Define o estilo da borda direita",
        "syntax": "none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|initial|inherit",
    },

    "larguraBordaDireita": {
        "name": "Largura-Borda-Direita",
        "css": "border-right-width",
        "description": "Define a largura da borda direita",
        "syntax": "lenght|medium|thin|thick|initial|inherit",
        "property": {
            "lenght": {
                "description": "Define o largura da borda direita",
                "example": "2px"
            },
        }
    },

    "espacamentoBorda": {
        "name": "Espaçamento-Borda",
        "css": "border-spacing",
        "description": "Define a distância entre as bordas das células adjacentes",
        "syntax": "length|initial|inherit",
        "property": {
            "lenght": {
                "description": "Especifica a distância entre as bordas das células adjacentes",
                "example": "2px"
            },
        }
    },

    "estiloBorda": {
        "name": "Estilo-Borda",
        "css": "border-style",
        "description": "Define o estilo das quatro bordas",
        "syntax": "none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|initial|inherit",
    },

    "bordaSuperior": {
        "name": "Borda-Superior",
        "css": "border-top",
        "description": "Uma propriedade abreviada para todas as propriedades de borda superior",
        "syntax": "border-width|border-style|border-color|initial|inherit",
        "property": {
            "border-width": {
                "description": "Define a largura da borda superior",
                "example": "thin | 2px"
            },

            "border-style": {
                "description": "Define o estilo da borda superior",
                "example": "dotted | solid"
            },

            "border-color": {
                "description": "Define a cor da borda superior",
                "example": "red | #FF0000 | rgb(255, 0, 0)"
            },
        }
    },

    "corBordaSuperior": {
        "name": "Cor-Borda-Superior",
        "css": "border-top-color",
        "description": "Define a cor da borda superior",
        "syntax": "color|transparent|initial|inherit",
        "property": {
            "color": {
                "description": "Define a cor da borda superior",
                "example": "red | #FF0000 | rgb(255, 0, 0)"
            },
        }
    },

    "raioBordaSuperiorEsquerda": {
        "name": "Raio-Borda-Superior-Esquerda",
        "css": "border-top-left-radius",
        "description": "Define o raio da borda do canto superior esquerdo",
        "syntax": "length|%|initial|inherit",
        "property": {
            "lenght": {
                "description": "Define a forma do canto superior esquerdo",
                "example": "2px"
            },

            "%": {
                "description": "Define a forma do canto superior esquerdo",
                "example": "25%"
            },
        }
    },

    "raioBordaSuperiorDireita": {
        "name": "Raio-Borda-Superior-Direita",
        "css": "border-top-right-radius",
        "description": "Define o raio da borda do canto superior direito",
        "syntax": "length|%|initial|inherit",
        "property": {
            "lenght": {
                "description": "Define a forma do canto superior direito",
                "example": "50px | 50px 20px"
            },

            "%": {
                "description": "Define a forma do canto superior direito",
                "example": "25%"
            },
        }
    },

    "estiloBordaSuperior": {
        "name": "Estilo-Borda-Superior",
        "css": "border-top-style",
        "description": "Define o estilo da borda superior",
        "syntax": "none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|initial|inherit",
    },

    "larguraBordaSuperior": {
        "name": "Largura-Borda-Superior",
        "css": "border-top-width",
        "description": "Define a largura da borda superior",
        "syntax": "lenght|medium|thin|thick|initial|inherit",
        "property": {
            "lenght": {
                "description": "Define o largura da borda superior",
                "example": "2px"
            },
        }
    },

    "larguraBorda": {
        "name": "Largura-Borda",
        "css": "border-width",
        "description": "Define a largura das quatro bordas",
        "syntax": "lenght|medium|thin|thick|initial|inherit",
        "property": {
            "lenght": {
                "description": "Define o largura da borda",
                "example": "2px"
            },
        }
    },

    "inferior": {
        "name": "Inferior",
        "css": "bottom",
        "description": "Define a posição dos elementos, a partir da parte inferior de seu elemento pai",
        "syntax": "lenght|auto|initial|inherit",
        "property": {
            "lenght": {
                "description": "Define a posição da borda inferior",
                "example": "100px"
            },
        }
    },

    "quebraCaixa": {
        "name": "Quebra-Decoração-Caixa",
        "css": "box-decoration-break",
        "description": "Define o comportamento do elemento na quebra de linha",
        "syntax": "slice|clone|initial|inherit|unset",
    },

    "sombraCaixa": {
        "name": "Sombra-Caixa",
        "css": "box-shadow",
        "description": "Anexa uma ou mais sombras a um elemento",
        "syntax": "h-offset|v-offset|blur|spread|color|none|inset|initial|inherit",
        "property": {
            "h-offset": {
                "description": "Obrigatório. Deslocamento horizontal da sombra",
                "example": "5px"
            },

            "v-offset": {
                "description": "Obrigatório. Deslocamento vertical da sombra",
                "example": "5px"
            },

            "blur": {
                "description": "Opcional. O raio do blur",
                "example": "5px",
            },

            "spread": {
                "description": "Opcional. O raio de propagação",
                "example": "5px",
            },

            "color": {
                "description": "Opcional. A cor da sombra",
                "example": "red | #FF0000 | rgb(255, 0, 0)",
            },
        }
    },

    "tamanhoCaixa": {
        "name": "Tamanho-Caixa",
        "css": "box-sizing",
        "description": "Define como a largura e a altura de um elemento são calculadas: devem incluir preenchimento e bordas ou não",
        "syntax": "content-box|border-box|initial|inherit",
    },

    "quebrarApos": {
        "name": "Quebrar-Após",
        "css": "break-after",
        "description": "Especifica se uma quebra de página, coluna ou região deve ocorrer ou não após o elemento especificado",
        "syntax": "auto|all|always|avoid|avoid-column|avoid-page|avoid-region|column|left|page|recto|region|right|verso|initial|inherit",
    },

    "quebrarAntes": {
        "name": "Quebrar-Antes",
        "css": "break-before",
        "description": "Especifica se uma quebra de página, coluna ou região deve ocorrer antes do elemento especificado",
        "syntax": "auto|all|always|avoid|avoid-column|avoid-page|avoid-region|column|left|page|recto|region|right|verso|initial|inherit",
    },

    "quebrarDentro": {
        "name": "Quebrar-Dentro",
        "css": "break-inside",
        "description": "Especifica se uma quebra de página, coluna ou região deve ocorrer dentro do elemento especificado",
        "syntax": "auto|all|always|avoid|avoid-column|avoid-page|avoid-region|column|left|page|recto|region|right|verso|initial|inherit",
    },

    "ladoLegenda": {
        "name": "Lado-Legenda",
        "css": "caption-side",
        "description": "Especifica o posicionamento de uma legenda de tabela",
        "syntax": "top|bottom|initial|inherit",
    },

    "caretColor": {
        "name": "Caret-Color",
        "css": "caret-color",
        "description": "Especifica a cor do cursor em entradas, áreas de texto ou qualquer elemento que seja editável",
        "syntax": "color|auto|initial|inherit",
        "property": {
            "color": {
                "description": "Define a cor do caret",
                "example": "red | #FF0000 | rgb(255, 0, 0)"
            },
        }
    },

    "limpar": {
        "name": "Limpar",
        "css": "clear",
        "description": "Especifica em quais lados de um elemento os elementos flutuantes não podem flutuar",
        "syntax": "none|left|right|both|initial|inherit",
    },

    "cortar": {
        "name": "Cortar",
        "css": "clip",
        "description": "Corta um elemento posicionado absolutamente",
        "syntax": "shape|auto|initial|inherit",
        "property": {
            "shape": {
                "description": "Corta um elemento. O único valor válido é: rect (top, right, bottom, left)",
                "example": "rect(10px,50px,50px,10px)"
            }
        }
    },

    "cor": {
        "name": "Cor",
        "css": "color",
        "description": "Define a cor do texto",
        "syntax": "color|initial|inherit",
        "property": {
            "color": {
                "description": "Define a cor do texto",
                "example": "red | #FF0000 | rgb(255, 0, 0)"
            }
        }
    },

    "contagemColunas": {
        "name": "Contagem-Colunas",
        "css": "column-count",
        "description": "Especifica o número de colunas em que um elemento deve ser dividido",
        "syntax": "number|auto|initial|inherit",
        "property": {
            "number": {
                "description": "O número ideal de colunas nas quais o conteúdo do elemento fluirá ",
                "example": "2 | 5"
            }
        }
    },

    "preenchimentoColunas": {
        "name": "Preenchimento-Colunas",
        "css": "column-fill",
        "description": "Especifica como preencher as colunas, balanceadas ou não",
        "syntax": "balance|auto|initial|inherit",
    },
    
    "brechaColunas": {
        "name": "Brecha-Colunas",
        "css": "column-gap",
        "description": "Especifica a brecha entre as colunas",
        "syntax": "length|normal|initial|inherit",
        "property": {
            "lenght": {
                "description": "Define o tamanho espaço entre as colunas",
                "example": "10px"
            },
        }
    },

    "ruleColunas": {
        "name": "Rule-Colunas",
        "css": "column-rule",
        "description": "Uma propriedade abreviada para todas as propriedades de rule",
        "syntax": "column-rule-width|column-rule-style|column-rule-color|initial|inherit",
        "property": {
            "column-rule-width": {
                "description": "Define o tamanho da rule entre as colunas",
                "example": "10px"
            },

            "column-rule-style": {
                "description": "Define o estilo da rule entre as colunas",
                "example": "dotted | solid"
            },

            "column-rule-color": {
                "description": "Define a cor da rule entre as colunas",
                "example": "red | #FF0000 | rgb(255, 0, 0)"
            },
        }
    },

    "corRuleColunas": {
        "name": "Cor-Rule-Colunas",
        "css": "column-rule-color",
        "description": "Especifica a cor da rule entre as colunas",
        "syntax": "color|initial|inherit",
        "property":{
            "color": {
                "description": "Define a cor da rule entre as colunas",
                "example": "red | #FF0000 | rgb(255, 0, 0)"
            },
        }
    },

    "estiloRuleColunas": {
        "name": "Estilo-Rule-Colunas",
        "css": "column-rule-style",
        "description": "Especifica o estilo da rule entre as colunas",
        "syntax": "none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|initial|inherit",
    },

    "larguraRuleColunas": {
        "name": "Largura-Rule-Colunas",
        "css": "column-rule-width",
        "description": "Especifica a largura da rule entre as colunas",
        "syntax": "lenght|medium|thin|thick|initial|inherit",
        "property":{
            "lenght": {
                "description": "Define a largura da rule entre as colunas",
                "example": "5px"
            },
        }
    },

    "periodoColunas": {
        "name": "Período-Colunas",
        "css": "column-span",
        "description": "Especifica quantas colunas um elemento deve abranger",
        "syntax": "none|all|initial|inheritt",
    },

    "larguraColunas": {
        "name": "Largura-Colunas",
        "css": "column-width",
        "description": "Especifica a largura da coluna",
        "syntax": "length|auto|initial|inherit",
        "property":{
            "lenght": {
                "description": "Define a largura das colunas",
                "example": "200px"
            },
        }
    },

    "larguraColunas": {
        "name": "Colunas",
        "css": "columns",
        "description": "Uma propriedade abreviada para largura de coluna e contagem de coluna",
        "syntax": "column-width|column-count|auto|initial|inheritt",
        "property":{
            "column-width": {
                "description": "Define a largura das colunas",
                "example": "200px"
            },

            "column-count": {
                "description": "O número ideal de colunas nas quais o conteúdo do elemento fluirá ",
                "example": "2 | 5"
            },
        }
    },

    "larguraColunas": {
        "name": "Largura-Colunas",
        "css": "content",
        "description": "Usado com os pseudo-elementos :before e :after, para inserir o conteúdo gerado",
        "syntax": "string|url|normal|none|counter|attr|open-quote|close-quote|no-open-quote|no-close-quote|initial|inheritt",
        "property":{
            "string": {
                "description": "Define o conteúdo de acordo com o texto que você especificar",
                "example": "Um texto aqui"
            },

            "url": {
                "description": "Define o conteúdo como algum tipo de mídia (uma imagem, um som, um vídeo, etc.)",
                "example": "url(sua-imagem-aqui.jpg)"
            },
        }
    },

    "larguraColunas": {
        "name": "Largura-Colunas",
        "css": "content",
        "description": "Usado com os pseudo-elementos :before e :after, para inserir o conteúdo gerado",
        "syntax": "string|url|normal|none|counter|attr|open-quote|close-quote|no-open-quote|no-close-quote|initial|inheritt",
        "property":{
            "string": {
                "description": "Define o conteúdo de acordo com o texto que você especificar",
                "example": "Um texto aqui"
            },
        }
    },

    "contadorIncremento": {
        "name": "Contador-Incremento",
        "css": "counter-increment",
        "description": "Aumenta ou diminui o valor de um ou mais contadores",
        "syntax": "id|none|initial|inherit",
        "property":{
            "id": {
                "description": "O id define qual contador incrementar",
                "example": "1"
            },
        }
    },

    "zerarContador": {
        "name": "Zerar-Contador",
        "css": "counter-reset",
        "description": "Cria ou redefine um ou mais contadores",
        "syntax": "number|none|initial|inherit",
        "property": {
            "number": {
                "description": "O id define qual contador zerar",
                "example": "1"
            },
        }
    },

    "cursor": {
        "name": "cursor",
        "css": "cursor",
        "description": "Especifica o cursor do mouse a ser exibido ao apontar sobre um elemento",
        "syntax": "url|alias|all-scroll|auto|cell|context-menu|col-resize|copy|crosshair|default|e-resize|ew-resize|grab|grabbing|help|move|n-resize|ne-resize|nesw-resize|ns-resize|nw-resize|nw-resize|nwse-resize|no-drop|none|not-allowed|pointer|progress|row-resize|s-resize|se-resize|sw-resize|text|w-resize|wait|zoom-in|zoom-out",
        "property": {
            "url": {
                "description": "Define a raiz de um novo cursor",
                "example": "url(mycursor.cur)"
            },
        }
    },

    "direcao": {
        "name": "Direção",
        "css": "direction",
        "description": "Especifica a direção do texto / direção de escrita",
        "syntax": "ltr|rtl|initial|inherit",
    },

    "exibicao": {
        "name": "Exibição",
        "css": "display",
        "description": "Especifica como um certo elemento deve ser exibido",
        "syntax": "inline|block|contents|flex|grid|inline-block|inline-flex|inline-grid|inline-table|list-item|run-in|table|table-caption|table-column-group|table-header-group|table-footer-group|table-row-group|table-cell|table-column|table-row|none|initial|inherit",
    },

    "celulasVazias": {
        "name": "Células-Vazias",
        "css": "empty-cells",
        "description": "Especifica se deve ou não exibir bordas e fundo em células vazias em uma tabela",
        "syntax": "show|hide|initial|inherit",
    },

    "filtro": {
        "name": "Filtro",
        "css": "filter",
        "description": "Define os efeitos (por exemplo, desfoque ou mudança de cor) em um elemento antes que o elemento seja exibido",
        "syntax": "none|blur()|brightness()|contrast()|drop-shadow()|grayscale()|hue-rotate()|invert()|opacity()|saturate()|sepia()|url()",
    },

    "flex": {
        "name": "Flex",
        "css": "flex",
        "description": "Uma propriedade abreviada para as propriedades flex",
        "syntax": "flex-grow|flex-shrink|flex-basis|auto|initial|inherit",
        "property": {
            "flex-grow": {
                "description": "Um número que especifica quanto o item crescerá em relação ao resto dos itens flexíveis",
                "example": "2 | 3"
            },

            "flex-shrink": {
                "description": "Um número que especifica o quanto o item encolherá em relação ao resto dos itens flexíveis",
                "example": "2 | 3"
            },

            "flex-basis": {
                "description": "O comprimento do item",
                "example": "50px | 2rem"
            },
        }
    },

    "baseFlexivel": {
        "name": "Base-Flexível",
        "css": "flex-basis",
        "description": "Especifica o comprimento inicial de um item flexível ",
        "syntax": "number|auto|initial|inherit",
        "property": {
            "number": {
                "description": "Uma unidade de comprimento, ou porcentagem, especificando o comprimento inicial do item flexível",
                "example": "20px | 50px"
            },
        }
    },

    "direcaoFlexivel": {
        "name": "Direção-Flexível",
        "css": "flex-direction",
        "description": "Especifica o comprimento inicial de um item flexível",
        "syntax": "row|row-reverse|column|column-reverse|initial|inherit",
    },

    "fluxoFlexivel": {
        "name": "Fluxo-Flexível",
        "css": "flex-flow",
        "description": "Uma propriedade abreviada para as propriedades direção-flexível e embrulho-flexível",
        "syntax": "flex-direction|flex-wrap|initial|inherit",
    },

    "crescerFlexivel": {
        "name": "Crescer-Flexível",
        "css": "flex-grow",
        "description": "Especifica quanto o item irá crescer em relação ao resto",
        "syntax": "number|initial|inherit",
        "property": {
            "number": {
                "description": "Um número que especifica quanto o item crescerá em relação ao restante dos itens flexíveis",
                "example": "2 | 5"
            },
        }
    },

    "encolherFlexivel": {
        "name": "Encolher-Flexível",
        "css": "flex-shrink",
        "description": "Especifica como o item irá encolher em relação ao resto",
        "syntax": "number|initial|inherit",
        "property": {
            "number": {
                "description": "Um número que especifica o quanto o item encolherá em relação ao resto dos itens flexíveis",
                "example": "2 | 5"
            },
        }
    },

    "embrulhoFlexivel": {
        "name": "Embrulho-Flexível",
        "css": "flex-wrap",
        "description": "Especifica se os itens flexíveis devem embrulhar ou não",
        "syntax": "nowrap|wrap|wrap-reverse|initial|inherit",
    },

    "fonte": {
        "name": "Fonte",
        "css": "font",
        "description": "Uma propriedade abreviada para as propriedades de fonte",
        "syntax": "font-style|font-variant|font-weight|font-size|line-height|font-family|caption|icon|menu|message-box|small-caption|status-bar|initial|inherit",
        "property": {
            "font-style": {
                "description": "Especifica o estilo da fonte",
                "example": "normal | italic"
            },

            "font-variant": {
                "description": "Especifica a variante da fonte",
                "example": "normal | small-caps"
            },

            "font-weight": {
                "description": "Especifica o peso da fonte",
                "example": "bold | 500"
            },

            "font-size": {
                "description": "Especifica o tamanho da fonte",
                "example": "15px | large | 1em | 150%"
            },

            "line-height": {
                "description": "Especifica o tamanho da linha",
                "example": "normal | 80% | 1rem | 1.6"
            },

            "font-family": {
                "description": "Especifica o tamanho da fonte",
                "example": "Helvetica | Arial"
            },
        }
    },

    "tipoLetra": {
        "name": "Tipo-Letra",
        "css": "@font-face",
        "description": "Uma regra que permite que os sites baixem e usem fontes diferentes das fontes seguras para a web",
        "syntax": "@font-face {propriedades da fonte}",
    },

    "familiaFonte": {
        "name": "Família-Fonte",
        "css": "font-family",
        "description": "Especifica a família da fonte para o texto",
        "syntax": "family-name|generic-family|initial|inherit",
        "property": {
            "family-name | generic-family": {
                "description": "Uma lista priorizada de nomes de família de fontes e / ou nomes de família genéricos",
                "example": "Helvetica | Arial"
            },
        }
    },

    "configuracoesFonte": {
        "name": "Configurações-Recurso-Fonte",
        "css": "font-feature-settings",
        "description": "Permite o controle sobre recursos tipográficos avançados em fontes OpenType",
        "syntax": "feature-value|normal",
        "property": {
            "feature-value": {
                "description": "Formato: string [1 | 0 | on | off] Sempre uma string de 4 caracteres ASCII",
                "example": "'smcp', on | 'frac'"
            },
        }
    },

    "valoresFonte": {
        "name": "Valores-Recurso-Fonte",
        "css": "font-feature-values",
        "description": "Permite que os autores usem um nome comum em font-variant-alternate para recurso ativado de forma diferente em OpenType",
    },

    "fonteKerning": {
        "name": "Fonte-Kerning",
        "css": "font-kerning",
        "description": "Controla o uso das informações de kerning (como as letras são espaçadas)",
        "syntax": "auto|normal|none",
    },

    "substituicaoIdiomaFonte": {
        "name": "Substituição-Idioma-Fonte",
        "css": "font-language-override",
        "description": "Controla o uso de glifos específicos do idioma em uma fonte",
        "syntax": "normal | ENG",
    },

    "tamanhoFonte": {
        "name": "Tamanho-Fonte",
        "css": "font-size",
        "description": "Especifica o tamanho da fonte do texto",
        "syntax": "15px | large | 1em | 150%",
    },

    "tamanhoFonte": {
        "name": "Tamanho-Fonte",
        "css": "font-size",
        "description": "Especifica o tamanho da fonte do texto",
        "syntax": "lenght|medium|xx-small|x-small|small|large|x-large|xx-large|smaller|larger|initial|inherit",
        "property":{
            "lenght": {
                "description": "Especifica o tamanho da fonte",
                "example": "15px | large | 1em | 150%"
            },
        }
    },

    "ajusteTamanhoFonte": {
        "name": "Ajuste-Tamanho-Fonte",
        "css": "font-size-adjust",
        "description": "Preserva a legibilidade do texto quando ocorre o recuo da fonte",
        "syntax": "number|none|initial|inherit",
        "property":{
            "number": {
                "description": "Especifica o tamanho da fonte",
                "example": "0.58"
            },
        }
    },

    "esticamentoFonte": {
        "name": "Esticamento-Fonte",
        "css": "font-stretch",
        "description": "Seleciona uma face normal, condensada ou expandida de uma família de fontes",
        "syntax": "ultra-condensed|extra-condensed|condensed|semi-condensed|normal|semi-expanded|expanded|extra-expanded|ultra-expanded|initial|inherit",
    },

    "estiloFonte": {
        "name": "Estilo-Fonte",
        "css": "font-style",
        "description": "Especifica o estilo da fonte para o texto",
        "syntax": "normal|italic|oblique|initial|inherit",
    },

    "fonteSintese": {
        "name": "Fonte-Síntese",
        "css": "font-synthesis",
        "description": "Controla quais fontes ausentes (negrito ou itálico) podem ser sintetizadas pelo navegador",
        "syntax": "none|weight|style",
    },

    "fonteVariante": {
        "name": "Fonte-Variante",
        "css": "font-variant",
        "description": "Especifica se um texto deve ou não ser exibido em uma fonte small-caps",
        "syntax": "normal|small-caps|initial|inherit",
    },

    "fonteVarianteAlternativa": {
        "name": "Fonte-Variante-Alternativa",
        "css": "font-variant-alternates",
        "description": "Controla o uso de glifos alternativos associados a nomes alternativos definidos em @font-feature-values",
        "syntax": "normal|historical-forms|stylistic()|styleset()|character-variant()|swash()|ornaments()|annotation()|initial|inherit",
    },

    "fonteVarianteCaps": {
        "name": "Fonte-Variante-Caps",
        "css": "font-variant-caps",
        "description": "Controla o uso de glifos alternativos para letras maiúsculas",
        "syntax": "normal|small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps|initial|inherit|unset",
    },

    "fonteVarianteLesteAsiatico": {
        "name": "Fonte-Variante-Leste-Asiatico",
        "css": "font-variant-east-asian",
        "description": "Controla o uso de glifos alternativos para scripts do Leste Asiático (por exemplo, japonês e chinês)",
        "syntax": "normal|ruby|value",
        "property":{
            "value": {
                "description": "Conjunto de variantes de glifos logográficos que devem ser usados para exibição",
                "example": "jis78 | simplified"
            },
        }
    },

    "ligaduraVariantesFonte": {
        "name": "Ligadura-Variantes-Fonte",
        "css": "font-variant-ligatures",
        "description": "Controla quais ligaduras e formas contextuais são usadas no conteúdo textual dos elementos aos quais se aplica",
        "syntax": "normal|none|common-ligatures|no-common-ligatures|discretionary-ligature|no-discretionary-ligatures|historical-ligatures|no-historical-ligatures|contextual|no-contextual|inherit|initial|unset",
    },

    "fonteVarianteNumerica": {
        "name": "Fonte-Variante-Numérica",
        "css": "font-variant-numeric",
        "description": "Controla o uso de glifos alternativos para números, frações e marcadores ordinais",
        "syntax": "normal|ordinal|slashed-zero|lining-nums|oldstyle-nums|proportional-nums|tabular-nums|diagonal-fractions|stacked-fractions|inherit|initial|unset",
    },

    "posicaoVariacaoFonte": {
        "name": "Posição-Variante-Fonte",
        "css": "font-variant-position",
        "description": "Controla o uso de glifos alternativos de tamanho menor posicionados como sobrescrito ou subscrito em relação à linha de base da fonte",
        "syntax": "normal|sub|super|inherit|initial|unset",
    },

    "pesoFonte": {
        "name": "Peso-Fonte",
        "css": "font-weight",
        "description": "Especifica o peso de uma fonte",
        "syntax": "number|normal|bold|bolder|lighter|initial|inherit",
        "property":{
            "number": {
                "description": "Especifica o peso de uma fonte",
                "example": "200 | 500"
            },
        }
    },

    "brecha": {
        "name": "Brecha",
        "css": "gap",
        "description": "Uma propriedade abreviada para as propriedades de brecha de linha e brecha de coluna",
        "syntax": "row-gap|column-gap",
        "property":{
            "row-gap": {
                "description": "Define o tamanho da lacuna entre as linhas em um layout de grade",
                "example": "50px | 3rem"
            },

            "column-gap": {
                "description": "Define o tamanho da lacuna entre as colunas em um layout de grade",
                "example": "50px | 3rem"
            },
        }
    },

    "grade": {
        "name": "Grade",
        "css": "grid",
        "description": "Uma propriedade abreviada para as propriedades de grade",
        "syntax": "grid-template-rows/grid-template-columns|grid-template-areas|grid-template-rows/[grid-auto-flow]grid-auto-columns|[grid-auto-flow]grid-auto-rows/grid-template-columns|none|initial|inherit",
        "property":{
            "grid-template-rows/grid-template-columns": {
                "description": "Especifica o tamanho das colunas e linhas",
                "example": "50px"
            },

            "grid-template-areas": {
                "description": "Especifica o layout da grade usando itens nomeados",
                "example": "myArea myArea . ."
            },

            "grid-template-rows/[grid-auto-flow]grid-auto-columns": {
                "description": "Especifica o tamanho (altura) das linhas e como colocar itens posicionados automaticamente e o tamanho automático das colunas",
                "example": ""
            },

            "[grid-auto-flow]grid-auto-rows/grid-template-columns": {
                "description": "Especifica como colocar itens posicionados automaticamente e o tamanho automático das linhas e define a propriedade grid-template-columns",
                "example": ""
            },
        }
    },

    "areaGrade": {
        "name": "Area-Grade",
        "css": "grid-area",
        "description": "uma propriedade abreviada para as propriedades grid start e end",
        "syntax": "grid-row-start|grid-column-start|grid-row-end|grid-column-end|itemname",
        "property":{
            "grid-row-start": {
                "description": "Especifica em qual linha iniciar a exibição do item",
                "example": "2 | 4"
            },

            "grid-column-start": {
                "description": "Especifica em qual coluna iniciar a exibição do item",
                "example": "2 | 4"
            },

            "grid-row-end": {
                "description": "Especifica em qual linha interromper a exibição do item ou quantas linhas devem ser estendidas",
                "example": "2 | 4"
            },

            "grid-column-end": {
                "description": "Especifica em qual coluna interromper a exibição do item ou quantas colunas devem ser estendidas",
                "example": "2 | 4"
            },

            "itemname": {
                "description": "Especifica um nome para o item da grade",
                "example": "item-grade"
            },
        }
    },

    "gradeAutoColuna": {
        "name": "Grade-Auto-Coluna",
        "css": "grid-auto-columns",
        "description": "Especifica um tamanho de coluna padrão",
        "syntax": "lenght|auto|max-content|min-content",
        "property":{
            "lenght": {
                "description": "Especifica um tamanho de coluna padrão",
                "example": "50px"
            },
        }
    },

    "gradeAutoFluxo": {
        "name": "Grade-Auto-Fluxo",
        "css": "grid-auto-flow",
        "description": "Especifica como os itens colocados automaticamente são inseridos na grade",
        "syntax": "row|column|dense|row dense|column dense",
    },

    "gradeColuna": {
        "name": "Grade-Coluna",
        "css": "grid-column",
        "description": "Uma propriedade abreviada para as propriedades grade-coluna start e end",
        "syntax": "grid-column-start|grid-column-end",
        "property":{
            "grid-column-start": {
                "description": "Especifica em qual coluna iniciar a exibição do item",
                "example": "2 | 4"
            },

            "grid-column-end": {
                "description": "Especifica em qual coluna parar de exibir o item ou quantas colunas devem ser estendidas",
                "example": "2 | 4"
            },
        }
    },

    "gradeColunaFim": {
        "name": "Grade-Coluna-Fim",
        "css": "grid-column-end",
        "description": "Especifica onde terminar o item da grade",
        "syntax": "column-line|span n|auto",
        "property":{
            "column-line": {
                "description": "Especifica em qual coluna finalizar a exibição do item",
                "example": "2 | 4"
            },

            "span n": {
                "description": "Especifica o número de colunas que o item irá abranger",
                "example": "span 3 | span 4"
            },
        }
    },

    "brechaColunaGrade": {
        "name": "Brecha-Coluna-Grade",
        "css": "grid-column-gap",
        "description": "Especifica o tamanho da brecha entre as colunas",
        "syntax": "length",
        "property":{
            "lenght": {
                "description": "Qualquer valor de comprimento válido, como px ou %",
                "example": "50px | 10%"
            },
        }
    },

    "gradeColunaInicio": {
        "name": "Grade-Coluna-Inicio",
        "css": "grid-column-start",
        "description": "Especifica onde iniciar o item da grade",
        "syntax": "column-line|span n|auto",
        "property":{
            "column-line": {
                "description": "Especifica em qual coluna iniciar a exibição do item",
                "example": "2 | 4"
            },

            "span n": {
                "description": "Especifica o número de colunas que o item irá abranger",
                "example": "span 3 | span 4"
            },
        }
    },

    "brechaGrade": {
        "name": "Brecha-Grade",
        "css": "grid-gap",
        "description": "Uma propriedade abreviada para as propriedades grid-row-gap e grid-column-gap",
        "syntax": "grid-row-gap grid-column-gaph",
        "property":{
            "grid-row-gap grid-column-gap": {
                "description": "Define o tamanho da lacuna entre as linhas e colunas em um layout de grade ",
                "example": "10px 10px | 15px 20px"
            },
        }
    },

    "gradeLinha": {
        "name": "Grade-Linha",
        "css": "grid-row",
        "description": "Uma propriedade abreviada para as propriedades grid-row start e end",
        "syntax": "grid-row-start|grid-row-end",
        "property":{
            "grid-row-start": {
                "description": "Especifica em qual linha iniciar a exibição do item",
                "example": "2 | 4"
            },

            "grid-row-end": {
                "description": "Especifica em qual linha parar de exibir o item ou quantas linhas devem ser estendidas",
                "example": "2 | 4"
            },
        }
    },

    "gradeLinhaFim": {
        "name": "Grade-Linha-Fim",
        "css": "grid-row-end",
        "description": "Especifica onde terminar o item da grade",
        "syntax": "row-line|span n|auto",
        "property":{
            "row-line": {
                "description": "Especifica em qual linha finalizar a exibição do item",
                "example": "2 | 4"
            },

            "span n": {
                "description": "Especifica o número de linhas que o item irá abranger",
                "example": "span 3 | span 4"
            },
        }
    },

    "brechaLinhaGrade": {
        "name": "Brecha-Linha-Grade",
        "css": "grid-row-gap",
        "description": "Especifica o tamanho da brecha entre as linhas",
        "syntax": "length",
        "property":{
            "lenght": {
                "description": "Qualquer valor de comprimento válido, como px ou %",
                "example": "50px | 10%"
            },
        }
    },

    "gradeLinhaInicio": {
        "name": "Grade-Linha-Inicio",
        "css": "grid-row-start",
        "description": "Especifica onde iniciar o item da grade",
        "syntax": "row-line|span n|auto",
        "property":{
            "row-line": {
                "description": "Especifica em qual linha iniciar a exibição do item",
                "example": "2 | 4"
            },

            "span n": {
                "description": "Especifica o número de linhas que o item irá abranger",
                "example": "span 3 | span 4"
            },
        }
    },

    "gradeModelo": {
        "name": "Grade-Modelo",
        "css": "grid-template",
        "description": "Uma propriedade abreviada para as propriedades de grid-template-rows, grid-template-columns e grid-areas",
        "syntax": "grid-template-rows/grid-template-columns|grid-template-areas|none|initial|inherit",
        "property":{
            "grid-template-rows/grid-template-columns": {
                "description": "Especifica o tamanho das colunas e linhas",
                "example": "100px / auto auto auto | 80px 120px / auto auto auto"
            },

            "grid-template-areas": {
                "description": "Especifica como exibir colunas e linhas, usando itens de grade nomeados",
                "example": "myArea myArea . . ."
            },
        }
    },

    "gradeModeloColunas": {
        "name": "Grade-Modelo-Colunas",
        "css": "grid-template-columns",
        "description": "Especifica o tamanho das colunas e quantas colunas em um layout de grade",
        "syntax": "length|none|auto|max-content|min-content|initial|inherit",
        "property":{
            "lenght": {
                "description": "Qualquer valor de comprimento válido, como px ou %",
                "example": "50px 100px | 10% 15%"
            },
        }
    },

    "gradeModeloLinhas": {
        "name": "Grade-Modelo-Linhas",
        "css": "grid-template-rows",
        "description": "Especifica o tamanho das linhas e quantas linhas em um layout de grade",
        "syntax": "length|none|auto|max-content|min-content|initial|inherit",
        "property":{
            "lenght": {
                "description": "Qualquer valor de comprimento válido, como px ou %",
                "example": "50px 100px | 10% 15%"
            },
        }
    },

    "pontuacaoSuspensa": {
        "name": "Pontuação-Suspensa",
        "css": "hanging-punctuation",
        "description": "Especifica se um caractere de pontuação pode ser colocado fora da caixa de linha",
        "syntax": "none|first|last|allow-end|force-end|initial|inherit",
    },

    "altura": {
        "name": "Altura",
        "css": "height",
        "description": "Define a altura de um elemento",
        "syntax": "length|auto|initial|inherit",
        "property":{
            "lenght": {
                "description": "Define a altura de um elemento",
                "example": "100px | 50% | 3rem"
            },
        }
    },

    "hifenizacao": {
        "name": "Hifenização",
        "css": "hyphens",
        "description": "Define como dividir palavras para melhorar o layout dos parágrafos",
        "syntax": "none|manual|auto|initial|inherit",
    },

    "renderizaçãoImagem": {
        "name": "Renderização-Imagem",
        "css": "image-rendering",
        "description": "Dá uma dica ao navegador sobre quais aspectos de uma imagem são mais importantes para preservar quando a imagem é redimensionada",
        "syntax": "auto|crisp-edges|pixelated|inherit|initial|unset",
    },

    "importar": {
        "name": "importar",
        "css": "@import",
        "description": "Permite-lhe importar uma folha de estilo para outra folha de estilo ",
        "syntax": "url|string|list-of-mediaqueries",
        "property":{
            "url": {
                "description": "Representa a localização do recurso a ser importado",
                "example": "url(folha-de-estilo.css)"
            },

            "string": {
                "description": "Representa a localização do recurso a ser importado",
                "example": "folha-de-estilo.css"
            },

            "list-of-mediaqueries": {
                "description": "Uma lista separada por vírgulas de consultas de mídia condicionando a aplicação das regras CSS definidas no URL vinculado",
                "example": "folha-de-estilo.css screen and (max-width: 768px)"
            },
        }
    },

    "isolamento": {
        "name": "Isolamento",
        "css": "isolation",
        "description": "Define se um elemento deve criar um novo conteúdo de empilhamento",
        "syntax": "auto|isolate|initial|inherit",
    },

    "justificarConteudo": {
        "name": "Justificar-Conteúdo",
        "css": "justify-content",
        "description": "Especifica o alinhamento entre os itens dentro de um recipiente flexível quando os itens não usam todo o espaço disponível",
        "syntax": "flex-start|flex-end|center|space-between|space-around|space-evenly|initial|inherit",
    },

    "quadrosChave": {
        "name": "Quadros-Chave",
        "css": "@keyframes",
        "description": "Especifica o código de animação",
        "syntax": "animationname {keyframes-selector {css-styles;}}",
    },

    "esquerda": {
        "name": "Esquerda",
        "css": "left",
        "description": "Define a posição dos elementos, a partir da parte esquerda de seu elemento pai",
        "syntax": "lenght|auto|initial|inherit",
        "property": {
            "lenght": {
                "description": "Define a posição da borda esquerda",
                "example": "100px"
            },
        }
    },

    "espacamentoLetras": {
        "name": "Espaçamento-Letras",
        "css": "letter-spacing",
        "description": "Aumenta ou diminui o espaço entre os caracteres em um texto",
        "syntax": "length|normal|initial|inherit",
        "property": {
            "lenght": {
                "description": "Define um espaço extra entre os caracteres",
                "example": "2px"
            },
        }
    },

    "quebraLinha": {
        "name": "Quebra-Linha",
        "css": "line-break",
        "description": "Especifica a quebra de linha",
        "syntax": "auto|loose|normal|strict|inherit|initial|unset",
    },

    "alturaLinha": {
        "name": "Altura-Linha",
        "css": "line-height",
        "description": "Define a altura da linha",
        "syntax": "number|normal|length|initial|inherit",
        "property": {
            "number": {
                "description": "Especifica a altura da linha",
                "example": "normal | 80% | 1rem | 1.6"
            },
        }
    },

    "estiloLista": {
        "name": "Estilo-Lista",
        "css": "list-style",
        "description": "Define todas as propriedades de uma lista em uma declaração",
        "syntax": "list-style-type|list-style-position|list-style-image|initial|inherit",
        "property": {
            "list-style-type": {
                "description": "Especifica o tipo de marcador de item da lista",
                "example": "decimal | square"
            },

            "list-style-position": {
                "description": "Especifica onde colocar o marcador do item da lista",
                "example": "outside | inside"
            },
            
            "list-style-image": {
                "description": "Especifica uma imagem como o marcador do item da lista",
                "example": "url('meu-marcador.jpg')"
            },
        }
    },

    "imagemEstiloLista": {
        "name": "Imagem-Estilo-Lista",
        "css": "list-style-image",
        "description": "Especifica uma imagem como o marcador do item da lista",
        "syntax": "url|none|initial|inherit",
        "property": {
            "url": {
                "description": "O caminho para a imagem a ser usado como um marcador de item da lista",
                "example": "url(sua-imagem-aqui.jpg)"
            },
        }
    },

    "posicaoEstiloLista": {
        "name": "Posição-Estilo-Lista",
        "css": "list-position-image",
        "description": "Especifica a posição dos marcadores de item da lista",
        "syntax": "inside|outside|initial|inherit",
    },

    "tipoEstiloLista": {
        "name": "Tipo-Estilo-Lista",
        "css": "list-position-image",
        "description": "Especifica o tipo de marcador de item da lista",
        "syntax": "value",
        "property": {
            "value": {
                "description": "O caminho para a imagem a ser usado como um marcador de item da lista",
                "example": "url(sua-imagem-aqui.jpg)"
            },
        }
    },

    "margem": {
        "name": "Margem",
        "css": "margin",
        "description": "Define todas as propriedades da margem em uma declaração",
        "syntax": "length|auto|initial|inherit",
        "property": {
            "lenght": {
                "description": "Especifica o tamanho da margem",
                "example": "1rem"
            },
        }
    },

    "margemInferior": {
        "name": "Margem-Inferior",
        "css": "margin-bottom",
        "description": "Define a margem inferior de um elemento",
        "syntax": "length|auto|initial|inherit",
        "property": {
            "lenght": {
                "description": "Especifica o tamanho da margem",
                "example": "1rem"
            },
        }
    },

    "margemEsquerda": {
        "name": "Margem-Esquerda",
        "css": "margin-left",
        "description": "Define a margem esquerda de um elemento",
        "syntax": "length|auto|initial|inherit",
        "property": {
            "lenght": {
                "description": "Especifica o tamanho da margem",
                "example": "1rem"
            },
        }
    },

    "margemDireita": {
        "name": "Margem-Direita",
        "css": "margin-right",
        "description": "Define a margem direita de um elemento",
        "syntax": "length|auto|initial|inherit",
        "property": {
            "lenght": {
                "description": "Especifica o tamanho da margem",
                "example": "1rem"
            },
        }
    },

    "margemSuperior": {
        "name": "Margem-Superior",
        "css": "margin-top",
        "description": "Define a margem superior de um elemento",
        "syntax": "length|auto|initial|inherit",
        "property": {
            "lenght": {
                "description": "Especifica o tamanho da margem",
                "example": "1rem"
            },
        }
    },

    "mascara": {
        "name": "Máscara",
        "css": "mask",
        "description": "Permite aos usuários alterarem a visibilidade de um item parcialmente ou totalmente escondendo o item",
        "syntax": "",
    },

    "tipoMascara": {
        "name": "TipoMáscara",
        "css": "mask-type",
        "description": "Especifica se um elemento de máscara é usado como luminância ou máscara alfa",
        "syntax": "",
    },

    "alturaMaxima": {
        "name": "Altura-Máxima",
        "css": "max-heigth",
        "description": "Define a altura máxima de um elemento",
        "syntax": "length|none|initial|inherit",
    },

    "larguraMaxima": {
        "name": "Largura-Máxima",
        "css": "max-width",
        "description": "Define a largura máxima de um elemento",
        "syntax": "length|none|initial|inherit",
    },

    "midia": {
        "name": "Mídia",
        "css": "@media",
        "description": "define as regras de estilo para diferentes tipos/dispositivos/tamanhos de mídia ",
        "syntax": "@media not|only mediatype and (mediafeature and|or|not mediafeature){CSS-Code;}"
    },

    "alturaMinima": {
        "name": "Altura-Mínima",
        "css": "min-heigth",
        "description": "Define a altura mínima de um elemento",
        "syntax": "length|none|initial|inherit",
    },

    "larguraMínima": {
        "name": "Largura-Mínima",
        "css": "min-width",
        "description": "Define a largura mínima de um elemento",
        "syntax": "length|none|initial|inherit",
    },

    "modoMistura": {
        "name": "Modo-Mistura",
        "css": "mix-blend-mode",
        "description": "Especifica como o conteúdo de um elemento deve se misturar com seu fundo pai direto",
        "syntax": "normal|multiply|screen|overlay|darken|lighten|color-dodge|color-burn|difference|exclusion|hue|saturation|color|luminosity",
    },

    "ajusteObjeto": {
        "name": "Ajuste-Objeto",
        "css": "object-fit",
        "description": "Especifica como o conteúdo de um elemento substituído deve ser ajustado à caixa estabelecida por sua altura e largura usadas",
        "syntax": "fill|contain|cover|scale-down|none|initial|inherit",
    },

    "posicaoObjeto": {
        "name": "Posição-Objeto",
        "css": "object-position",
        "description": "Especifica o alinhamento do elemento substituído dentro de sua caixa ",
        "syntax": "position|initial|inherit",
        "property": {
            "position": {
                "description": "Especifica a posição da imagem ou vídeo dentro de sua caixa de conteúdo",
                "example": "5px 10%"
            },
        }
    },

    "opacidade": {
        "name": "Opacidade",
        "css": "opacity",
        "description": "Define o nível de opacidade de um elemento",
        "syntax": "number|initial|inherit",
        "property": {
            "number": {
                "description": "Define o nível de opacidade de um elemento",
                "example": "0.5 | 0.8"
            },
        }
    },

    "ordem": {
        "name": "Ordem",
        "css": "order",
        "description": "Define a ordem do item flexível em relação ao resto",
        "syntax": "number|initial|inherit",
        "property": {
            "number": {
                "description": "Especifica a ordem do item flexível ",
                "example": "0 | 2"
            },
        }
    },

    "orfaos": {
        "name": "Orfãos",
        "css": "orphans",
        "description": "Define o número mínimo de linhas em um contêiner de bloco que deve ser mostrado na parte inferior",
        "syntax": "number|initial|inherit",
        "property": {
            "number": {
                "description": "Especifica a ordem do item flexível",
                "example": "2 | 3"
            },
        }
    },

    "contorno": {
        "name": "Contorno",
        "css": "outline",
        "description": "Uma propriedade abreviada para as propriedades de contorno",
        "syntax": "outline-width|outline-style|outline-color|initial|inherit",
        "property": {
            "outline-width": {
                "description": "Especifica a largura do contorno",
                "example": "2px"
            },

            "outline-style": {
                "description": "Especifica o estilo do contorno",
                "example": "solid | dooted"
            },

            "outline-color": {
                "description": "Especifica a cor do contorno",
                "example": "red | #FF0000 | rgb(255, 0, 0)"
            },
        }
    },

    "corContorno": {
        "name": "Cor-Contorno",
        "css": "outline-color",
        "description": "Define a cor de um contorno",
        "syntax": "color|invert|initial|inherit",
        "property": {
            "color": {
                "description": "Especifica a cor do contorno",
                "example": "red | #FF0000 | rgb(255, 0, 0)"
            },
        }
    },

    "deslocamentoContorno": {
        "name": "Deslocamento-Contorno",
        "css": "outline-offset",
        "description": "Desloca um contorno e o desenha além da borda",
        "syntax": "length|initial|inherit",
        "property": {
            "lenght": {
                "description": "Desloca um contorno e o desenha além da borda",
                "example": "15px"
            },
        }
    },

    "estiloContorno": {
        "name": "Estilo-Contorno",
        "css": "outline-style",
        "description": "Define o estilo de um contorno",
        "syntax": "none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|initial|inherit",
    },

    "larguraContorno": {
        "name": "Largura-Contorno",
        "css": "outline-width",
        "description": "Define a largura de um contorno",
        "syntax": "length|medium|thin|thick|initial|inherit",
        "property": {
            "lenght": {
                "description": "Define a largura de um contornoa",
                "example": "5px"
            },
        }
    },

    "transbordar": {
        "name": "Transbordar",
        "css": "overflow",
        "description": "Especifica o que acontece se o conteúdo transbordar a caixa de um elemento",
        "syntax": "visible|hidden|scroll|auto|initial|inherit",
    },

    "embrulhoTransbordar": {
        "name": "embrulhoTransbordar",
        "css": "overflow-wrap",
        "description": "Especifica se o navegador pode ou não quebrar as linhas dentro das palavras para evitar transbordar",
        "syntax": "normal|break-word|initial|inherit",
    },

    "transbordarX": {
        "name": "Transbordar-X",
        "css": "overflow-x",
        "description": "Especifica se deve ou não cortar as bordas esquerda/direita do conteúdo, se transbordar a área de conteúdo do elemento",
        "syntax": "visible|hidden|scroll|auto|initial|inherit",
    },

    "transbordarY": {
        "name": "Transbordar-Y",
        "css": "overflow-y",
        "description": "Especifica se deve ou não cortar as bordas superior/inferior do conteúdo, se estourar a área de conteúdo do elemento",
        "syntax": "visible|hidden|scroll|auto|initial|inherit",
    },

    "preenchimento": {
        "name": "Preenchimento",
        "css": "padding",
        "description": "Uma propriedade abreviada para todas as propriedades de preenchimento",
        "syntax": "length|initial|inherit",
        "property": {
            "lenght": {
                "description": "Define o tamanho do preenchimento",
                "example": "10px | 1rem"
            },
        }
    },

    "preenchimentoInferior": {
        "name": "Preenchimento-Inferior",
        "css": "padding-bottom",
        "description": "Define o preenchimento inferior de um elemento",
        "syntax": "length|initial|inherit",
        "property": {
            "lenght": {
                "description": "Define o tamanho do preenchimento inferior",
                "example": "10px | 1rem"
            },
        }
    },

    "preenchimentoEsquerda": {
        "name": "Preenchimento-Esquerda",
        "css": "padding-left",
        "description": "Define o preenchimento esquerdo de um elemento",
        "syntax": "length|initial|inherit",
        "property": {
            "lenght": {
                "description": "Define o tamanho do preenchimento esquerdo",
                "example": "10px | 1rem"
            },
        }
    },

    "preenchimentoDireita": {
        "name": "Preenchimento-Direita",
        "css": "padding-right",
        "description": "Define o preenchimento direito de um elemento",
        "syntax": "length|initial|inherit",
        "property": {
            "lenght": {
                "description": "Define o tamanho do preenchimento direito",
                "example": "10px | 1rem"
            },
        }
    },

    "preenchimentoSuperior": {
        "name": "Preenchimento-Superior",
        "css": "padding-top",
        "description": "Define o preenchimento superior de um elemento",
        "syntax": "length|initial|inherit",
        "property": {
            "lenght": {
                "description": "Define o tamanho do preenchimento superior",
                "example": "10px | 1rem"
            },
        }
    },

    "quebrarPaginaApos": {
        "name": "Quebrar-Página-Após",
        "css": "page-break-after",
        "description": "Define o comportamento de quebra de página após um elemento",
        "syntax": "auto|always|avoid|left|right|initial|inherit",
    },

    "quebrarPaginaAntes": {
        "name": "Quebrar-Página-Antes",
        "css": "page-break-before",
        "description": "Define o comportamento de quebra de página antes de um elemento",
        "syntax": "auto|always|avoid|left|right|initial|inherit",
    },

    "quebrarPaginaDentro": {
        "name": "Quebrar-Página-Dentro",
        "css": "page-break-inside",
        "description": "Define o comportamento de quebra de página dentro de um elemento",
        "syntax": "auto|avoid|initial|inherit",
    },

    "perspectiva": {
        "name": "Perspectiva",
        "css": "perspective",
        "description": "Dá a um elemento posicionado em 3D alguma perspectiva",
        "syntax": "length|none",
        "property": {
            "lenght": {
                "description": "Dá a um elemento posicionado em 3D alguma perspectiva",
                "example": "100px"
            },
        }
    },

    "perspectivaOrigem": {
        "name": "Perspectiva-Origem",
        "css": "perspective-origin",
        "description": "Define em qual posição o usuário está olhando para o elemento posicionado em 3D",
        "syntax": "x-axis|y-axis|initial|inherit",
        "property": {
            "x-axis": {
                "description": "Definindo onde a visualização é colocada no eixo x",
                "example": "left | 25%"
            },

            "y-axis": {
                "description": "Definindo onde a visualização é colocada no eixo y",
                "example": "left | 25%"
            },
        }
    },

    "eventosPonteiro": {
        "name": "Eventos-Ponteiro",
        "css": "pointer-events",
        "description": "Define se um elemento reage ou não a eventos de ponteiro",
        "syntax": "auto|none|initial|inherit",
    },

    "posicao": {
        "name": "Posição",
        "css": "position",
        "description": "Especifica o tipo de método de posicionamento usado para um elemento",
        "syntax": "static|absolute|fixed|relative|sticky|initial|inherit",
    },

    "quotes": {
        "name": "Posição",
        "css": "quotes",
        "description": "Define o tipo de aspas para aspas incorporadas",
        "syntax": "string|none|initial|inherit",
        "property": {
            "string": {
                "description": "Define o tipo de aspas para aspas incorporadas",
                "example": "'«' '»'",
            },
        }
    },

    "redimensionar": {
        "name": "Redimensionar",
        "css": "resize",
        "description": "Define se um elemento é redimensionável pelo usuário",
        "syntax": "none|both|horizontal|vertical|initial|inherit",
    },

    "direita": {
        "name": "Direita",
        "css": "right",
        "description": "Especifica a posição em relação a borda direita",
        "syntax": "length|none|initial|inherit",
        "property": {
            "lenght": {
                "description": "Especifica a posição em relação a borda direita",
                "example": "100px | 2rem",
            },
        }
    },

    "brechaLinha": {
        "name": "Brecha-Linha",
        "css": "row-gap",
        "description": "Especifica a lacuna entre as linhas da grade",
        "syntax": "length|normal|initial|inherit",
        "property": {
            "lenght": {
                "description": "Especifica a lacuna entre as linhas da grade",
                "example": "100px | 50%",
            },
        }
    },

    "comportamentoRolagem": {
        "name": "Comportamento-Rolagem",
        "css": "scrool-behavior",
        "description": "especifica se deve animar suavemente a posição de rolagem em uma caixa rolável, em vez de um salto direto",
        "syntax": "auto|smooth|initial|inherit"
    },

    "tamanhoEspaco": {
        "name": "tamanhoEspaco",
        "css": "tab-size",
        "description": "Especifica a largura de um caractere de tabulação",
        "syntax": "number|length|initial|inherit",
        "property": {
            "number": {
                "description": "Especifica a largura de um caractere de tabulação",
                "example": "3 | 8",
            },

            "lenght": {
                "description": "Especifica a largura de um caractere de tabulação",
                "example": "3 | 8",
            },
        }
    },

    "layoutTabela": {
        "name": "Layout-Tabela",
        "css": "table-layout",
        "description": "Define o algoritmo usado para organizar as células, linhas e colunas da tabela",
        "syntax": "auto|fixed|initial|inherit",
    },

    "alinharTexto": {
        "name": "Alinhar-Texto",
        "css": "text-align",
        "description": "Especifica o alinhamento horizontal do texto",
        "syntax": "left|right|center|justify|initial|inherit",
    },

    "alinharTextoUltimo": {
        "name": "Alinhar-Texto-Último",
        "css": "text-align-last",
        "description": "Descreve como a última linha de um bloco ou uma linha antes de uma quebra de linha forçada é alinhada quando o alinhamento de texto é justificado",
        "syntax": "auto|left|right|center|justify|start|end|initial|inheritt",
    },

    "combinacaoTextoVertical": {
        "name": "Combinação-Texto-vertical",
        "css": "text-combine-upright",
        "description": "Especifica a combinação de vários caracteres no espaço de um único caractere",
        "syntax": "none|all|digits|inherit|initial|unset",
    },

    "decoracaoTexto": {
        "name": "Decoração-Texto",
        "css": "text-decoration",
        "description": "Especifica a decoração adicionada ao texto",
        "syntax": "text-decoration-line|text-decoration-color|text-decoration-style|initial|inherit",
        "property": {
            "text-decoration-line": {
                "description": "Define o tipo de decoração de texto a ser usada (como sublinhado, sobrelinhado, linha através)",
                "example": "undeline | overline",
            },

            "text-decoration-color": {
                "description": "Define a cor da decoração do texto ",
                "example": "red | #FF0000 | rgb(255, 0, 0)",
            },

            "text-decoration-style": {
                "description": "Define o estilo da decoração do texto (como sólido, ondulado, pontilhado, tracejado, duplo)",
                "example": "solid | dotted",
            },
        }
    },

    "corDecoracaoTexto": {
        "name": "Cor-Decoração-Texto",
        "css": "text-decoration-color",
        "description": "Especifica a cor da decoração do texto",
        "syntax": "color|initial|inherit",
        "property": {
            "color": {
                "description": "Especifica a cor da decoração do texto",
                "example": "red | #FF0000 | rgb(255, 0, 0)",
            },
        }
    },

    "linhaDecoracaoTexto": {
        "name": "Linha-Decoração-Texto",
        "css": "text-decoration-line",
        "description": "Especifica a linha da decoração do texto",
        "syntax": "none|underline|overline|line-through|initial|inherit",
    },

    "estiloDecoracaoTexto": {
        "name": "Estilo-Decoração-Texto",
        "css": "text-decoration-style",
        "description": "Especifica o estilo da linha em uma decoração de texto",
        "syntax": "solid|double|dotted|dashed|wavy|initial|inherit",
    },

    "identacaoTexto": {
        "name": "Identação-Texto",
        "css": "text-indent",
        "description": "Especifica o recuo da primeira linha em um bloco de texto",
        "syntax": "length|initial|inherit",
        "property": {
            "color": {
                "description": "Especifica o recuo da primeira linha em um bloco de texto",
                "example": "10px | 1rem",
            },
        }
    },

    "justificarTexto": {
        "name": "Justificar-Texto",
        "css": "text-justify",
        "description": "Especifica o método de justificação usado quando o alinhamento de texto é justificar",
        "syntax": "auto|inter-word|inter-character|none|initial|inherit",
    },

    "orientacaoTexto": {
        "name": "Orientação-Texto",
        "css": "text-orientation",
        "description": "Define a orientação do texto em uma linha",
        "syntax": "mixed|upright|sideways-right|sideways|use-glyph-orientation|inherit|initial|unset",
    },

    "transbordarTexto": {
        "name": "Transbordar-Texto",
        "css": "text-overflow",
        "description": "Especifica o que deve acontecer quando o texto ultrapassa o elemento que o contém",
        "syntax": "string|clip|ellipsis|initial|inherit",
        "property": {
            "string": {
                "description": "Renderiza a string fornecida para representar o texto recortado",
                "example": "",
            },
        }
    },

    "transbordarTexto": {
        "name": "Transbordar-Texto",
        "css": "text-shadow",
        "description": "Adds shadow to text",
        "syntax": "h-shadow|v-shadow|blur-radius|color|none|initial|inherit",
        "property": {
            "h-shadow": {
                "description": "A posição da sombra horizontal",
                "example": "2px 2px",
            },

            "v-shadow": {
                "description": "A posição da sombra vertical",
                "example": "2px 2px",
            },

            "blur-radius": {
                "description": "O raio do blur",
                "example": "2px 2px 2px",
            },

            "color": {
                "description": "Cor da sombra",
                "example": "2px 2px 2px red",
            },
        }
    },

    "transformarTexto": {
        "name": "Transformar-Texto",
        "css": "text-transform",
        "description": "Controla a capitalização do texto",
        "syntax": "none|capitalize|uppercase|lowercase|initial|inherit",
    },

    "posicaoSublinhadoTexto": {
        "name": "Posição-Sublinha-Texto",
        "css": "text-underline-position",
        "description": "Especifica a posição do sublinhado que é definida usando a propriedade text-decoration",
        "syntax": "none|capitalize|uppercase|lowercase|initial|inherit",
    },

    "superior": {
        "name": "Superior",
        "css": "top",
        "description": "Especifica a posição de um elemento de acordo com a borda superior",
        "syntax": "length|auto|initial|inherit",
        "property": {
            "lenght": {
                "description": "Especifica a posição de um elemento de acordo com a borda superior",
                "example": "10px | 1rem",
            },
        }
    },

    "transformar": {
        "name": "Transformar",
        "css": "transform",
        "description": "Aplica uma transformação 2D ou 3D a um elemento",
        "syntax": "transform-functions|none|initial|inherit",
        "property": {
            "transform-functions": {
                "description": "Aplica uma transformação 2D ou 3D a um elemento",
                "example": "scaleX(x) | rotateY(angle)",
            },
        }
    },

    "transformarOrigem": {
        "name": "Transformar-Origem",
        "css": "transform-origin",
        "description": "Permite que você mude a posição em elementos transformados",
        "syntax": "x-axis|y-axis|z-axis|initial|inherit",
        "property": {
            "x-axis": {
                "description": "Define onde a vista é colocada no eixo x",
                "example": "left | 50%",
            },

            "y-axis": {
                "description": "Define onde a vista é colocada no eixo y",
                "example": "left | 50%",
            },

            "z-axis": {
                "description": "Define onde a vista é colocada no eixo z",
                "example": "left | 50%",
            },
        }
    },

    "transformarEstilo": {
        "name": "Transformar-Estilo",
        "css": "transform-style",
        "description": "Especifica como os elementos aninhados são renderizados no espaço 3D",
        "syntax": "flat|preserve-3d|initial|inherit",
    },

    "transicao": {
        "name": "Transição",
        "css": "transition",
        "description": "Uma propriedade abreviada para toda a transição",
        "syntax": "property|duration|timing-function|delay|initial|inherit",
        "property": {
            "property": {
                "description": "Especifica o nome da propriedade CSS para a qual o efeito de transição se destina",
                "example": "opacity",
            },

            "duration": {
                "description": "Especifica a duração do efeito de transição",
                "example": "0.2s | 400ms",
            },

            "timing-function": {
                "description": "Especifica a curva de velocidade do efeito de transição ",
                "example": "linear | ease-in",
            },
        }
    },

    "atrasoTransição": {
        "name": "Transformar-Estilo",
        "css": "transition-delay",
        "description": "Especifica quando o efeito de transição começará",
        "syntax": "time|initial|inherit",
        "property": {
            "time": {
                "description": "Tempo de atraso da transição",
                "example": "0.2s | 400ms",
            },
        }
    },

    "duracaoTransição": {
        "name": "Duração-Transição",
        "css": "transition-duration",
        "description": "Especifica a duração do efeito de transição",
        "syntax": "time|initial|inherit",
        "property": {
            "time": {
                "description": "Tempo de duração da transição",
                "example": "0.2s | 400ms",
            },
        }
    },

    "propriedadeTransição": {
        "name": "Propriedade-Transição",
        "css": "transition-property",
        "description": "Especifica a duração do efeito de transição",
        "syntax": "property|none|all|initial|inherit",
        "property": {
            "property": {
                "description": "Define uma lista separada por vírgulas de nomes de propriedades CSS para os quais o efeito de transição é aplicado",
                "example": "width | height",
            },
        }
    },

    "unicodeBidi": {
        "name": "Unicode-Bidi",
        "css": "unicode-bidi",
        "description": "Usado junto com a propriedade direction para definir ou retornar se o texto deve ser sobrescrito para suportar vários idiomas no mesmo documento",
        "syntax": "normal|embed|bidi-override|initial|inherit",
    },
    
    "selecaoUsuario": {
        "name": "Seleção-Usuário",
        "css": "user-select",
        "description": "Especifica se o texto de um elemento pode ser selecionado",
        "syntax": "auto|none|text|all",
    },

    "alinharVertical": {
        "name": "Alinhar-Vertical",
        "css": "vertical-align",
        "description": "Define o alinhamento vertical de um elemento",
        "syntax": "length|baseline|sub|super|top|text-top|middle|bottom|text-bottom|initial|inherit",
        "property": {
            "lenght": {
                "description": "Define uma lista separada por vírgulas de nomes de propriedades CSS para os quais o efeito de transição é aplicado",
                "example": "25px",
            },
        }
    },

    "visibilidade": {
        "name": "Visibilidade",
        "css": "visibility",
        "description": "Especifica se um elemento é ou não visível",
        "syntax": "visible|hidden|collapse|initial|inherit",
    },

    "espacoBranco": {
        "name": "Espaço-Branco",
        "css": "white-space",
        "description": "Especifica como o espaço em branco dentro de um elemento é tratado",
        "syntax": "normal|nowrap|pre|pre-line|pre-wrap|initial|inherit",
    },

    "viuvas": {
        "name": "Viúvas",
        "css": "widows",
        "description": "Define o número mínimo de linhas em um contêiner de bloco que deve ser mostrado no topo de uma página, região ou coluna",
        "syntax": "value|inherit|initial|unset",
        "property": {
            "value": {
                "description": "Define o número mínimo de linhas em um contêiner de bloco que deve ser mostrado no topo de uma página, região ou coluna",
                "example": "3 | 2",
            },
        }
    },

    "largura": {
        "name": "Largura",
        "css": "width",
        "description": "Define a largura de um elemento",
        "syntax": "value|auto|initial|inherit",
        "property": {
            "value": {
                "description": "Define a largura de um elemento",
                "example": "500px | 6rem",
            },
        }
    },

    "quebraPalavra": {
        "name": "quebraPalavra",
        "css": "word-break",
        "description": "Especifica como as palavras devem quebrar ao chegar ao final de uma linha",
        "syntax": "normal|break-all|keep-all|break-word|initial|inherit",
    },

    "espacamentoPalavra": {
        "name": "espacamentoPalavra",
        "css": "word-spacing",
        "description": "Aumenta ou diminui o espaço entre as palavras em um texto",
        "syntax": "length|normal|initial|inherit",
        "property": {
            "lenght": {
                "description": "Define o espaçamento entre as palavras",
                "example": "15px",
            },
        }
    },

    "embrulhoPalavra": {
        "name": "Embrulho-Palavra",
        "css": "word-wrap",
        "description": "Permite que palavras longas e inquebráveis sejam quebradas e quebradas na próxima linha",
        "syntax": "normal|break-word|initial|inherit",
    },

    "modoEscrita": {
        "name": "Modo-Escrita",
        "css": "writing-mode",
        "description": "Especifica se as linhas de texto são dispostas horizontal ou verticalmente",
        "syntax": "horizontal-tb|vertical-rl|vertical-lr",
    },

    "indiceZ": {
        "name": "Indíce-Z",
        "css": "z-index",
        "description": "Define a ordem de empilhamento de um elemento posicionado",
        "syntax": "number|auto|initial|inherit",
        "property": {
            "number": {
                "description": "Define a ordem de empilhamento de um elemento posicionado",
                "example": "100",
            },
        }
    },
}

propComponents = {
    "accept": {
        "description": "Lista de tipos que o servidor aceita, tipicamente um tipo de arquivo",
        "elements": ["form", "input"]
    },

    "accept-charset": {
        "description": "Lista de conjunto de caracteres suportados",
        "elements": ["form"]
    },

    "accesskey": {
        "description": "Define um atalho no teclado para ativar ou adicionar foco ao elemento",
        "elements": ["Atributo Global"]
    },

    "action": {
        "description": "A URI de um programa que processa a informação submetida através do formulário",
        "elements": ["form"]
    },

    "align": {
        "description": "Especifica o alinhamento horizontal do elemento",
        "elements": ["applet", "caption", "col", "colgroup",  "hr", "iframe", "img", "table", "tbody",  "td",  "tfoot" , "th", "thead", "tr"]
    },

    "alt": {
        "description": "Texto alternativo caso uma imagem não possa ser exibida",
        "elements": ["applet", "area", "img", "input"]
    },

    "async": {
        "description": "Indica que o script deve ser executado assíncrono",
        "elements": ["script"]
    },

    "autocomplete": {
        "description": "Indica se controles  neste formulário podem por padrão ter seus valores completados automaticamente pelo navegador",
        "elements": ["form", "input"]
    },

    "autofocus": {
        "description": "O elemento deve ser focado automaticamente após a página ser carregada.",
        "elements": ["button", "input", "keygen", "select", "textarea"]
    },

    "autoplay": {
        "description": "O aúdio ou vídeo deve ser reproduzido assim que possível",
        "elements": ["audio", "video"]
    },

    "bgcolor": {
        "description": "Cor do plano de fundo do elemento. Este é um atributo legado, use a propriedade CSS background-color em vez disso",
        "elements": ["body", "col", "colgroup", "marquee", "table", "tbody", "tfoot", "td", "th", "tr"]
	},

    "border": {
        "description": "A largura da borda. Este é um atributo legado, use a propriedade CSS border em vez disso",
        "elements": ["img", "object", "table"]
	},

    "buffered": {
        "description": "Contém o intervalo de tempo da mídia que já foi carregada",
        "elements": ["audio", "video"]
	},

    "challenge": {
        "description": "Uma string de desafio enviada junto com a chave pública",
        "elements": ["keygen"]
	},

    "charset": {
        "description": "Declara a codificação dos caracteres da página ou do script",
        "elements": ["meta", "script"]
	},

    "checked": {
        "description": "Indica se o elemento deve ser checado no carregamento da página",
        "elements": ["command", "input"]
	},

    "cite": {
        "description": "Contêm uma URI que aponta para a fonte da citação ou alteração",
        "elements": ["blockquote", "del", "ins", "q"]
	},

    "class": {
        "description": "Frequentemente usado com CSS para estilizar os elementos com propriedades comuns",
        "elements": ["Atributo Global"]
	},

    "class": {
        "description": "Frequentemente usado com CSS para estilizar os elementos com propriedades comuns",
        "elements": ["Global attribute"]
	},

    "code": {
        "description": "Especifica a URL do arquivo de classe do miniaplicativo que será carregado e executado",
        "elements": ["applet"]
	},

    "codebase": {
        "description": "Este atributo fornece a URL absoluta ou relativa do diretório onde os arquivos .class do miniaplicativo são armazenados",
        "elements": ["applet"]
	},

    "color": {
        "description": "Este atributo define a cor do texto. Este é um atributo legado, Por favor use a propriedade CSS color em vez disso",
        "elements": ["basefont", "font", "hr"]
	},

    "cols": {
        "description": "Define o número de colunas numa area de texto",
        "elements": ["textarea"]
	},

    "colspan": {
        "description": "O atributo colspan define o número de colunas que uma célula deve conter",
        "elements": ["td", "th"]
	},

    "content": {
        "description": "Um valor associado com http-equiv ou name dependendo do contexto.",
        "elements": ["meta"]
	},

    "contenteditable": {
        "description": "Indica se o conteúdo do elemento é editável",
        "elements": ["Atributo Global"]
	},

    "contextmenu": {
        "description": "Define o ID de um elemento <menu> que servirá como o menu de contexto de um outro elemento",
        "elements": ["Atributo Global"]
	},

    "controls": {
        "description": "Indica se o navegador deve mostrar ou não os controles de reprodução ao usuário",
        "elements": ["audio", "video"]
	},

    "coords": {
        "description": "Uma escolha de valores especificando as coordenadas da região hot-spot",
        "elements": ["area"]
	},

    "data": {
        "description": "Especifica a URL do recurso",
        "elements": ["object"]
	},

    "datetime": {
        "description": "Indica a data e o horário associados ao elemento",
        "elements": ["del", "ins", "time"]
	},

    "default": {
        "description": "Indica que a faixa deve estar habilitada a não ser que as preferências do usuário indiquem algo diferente",
        "elements": ["track"]
	},

    "defer": {
        "description": "Indica que o script deve ser executado após a página ter sido analisada",
        "elements": ["script"]
	},

    "dir": {
        "description": "Defina a direção do texto. Os valores permitidos são ltr (Esquerda para direita) e rtl (Direita para esquerda)",
        "elements": ["Atributo Global"]
	},

    "dirname": {
        "description": "",
        "elements": ["Atributo Global"]
	},

    "disabled": {
        "description": "Indica se o usuário pode ou não interagir com o elemento.",
        "elements": ["button", "command", "fieldset", "input", "keygen", "optgroup", "option", "select", "textarea"]
	},

    "draggable": {
        "description": "Define se o elemento pode ser arrastado",
        "elements": ["Atributo Global"]
	},

    "dropzone": {
        "description": "Indica que o elemento aceita a soltagem de conteúdo nele",
        "elements": ["Atributo Global"]
	},

    "enctype": {
        "description": "Define o tipo de conteúdo da data do formulário quando o method é POST",
        "elements": ["form"]
	},

    "for": {
        "description": "Descreve elementos na qual pertencem a este",
        "elements": ["label", "output"]
	},

    "form": {
        "description": "Indica o formulário que é o proprietário do elemento",
        "elements": ["button", "fieldset", "input", "keygen", "label", "meter", "object", "output", "progress", "select", "textarea"]
	},

    "headers": {
        "description": "IDs dos elementos <th> na qual se aplicam a este elemento",
        "elements": ["td", "th"]
	},

    "height": {
        "description": "Em algumas instâncias, tal como <div>, isto é um atributo legado, em cujo caso  a propriedade CSS height deveria ser usado em vez. Em outros casos, assim como <canvas>, a altura deve ser especificado com esse atributo",
        "elements": ["canvas", "embed", "iframe", "img", "input", "object", "video"]
	},

    "hidden": {
        "description": "Indica a relevância de um elemento",
        "elements": ["Atributo Global"]
	},

    "high": {
        "description": "Indica o menor limite da faixa superior",
        "elements": ["meter"]
	},

    "href": {
        "description": "A URL de um recurso ligado",
        "elements": ["a", "area", "base", "link"]
	},

    "hreflang": {
        "description": "Especifica o idioma de um recurso ligado",
        "elements": ["a", "area", "link"]
	},

    "http-equiv": {
        "description": "",
        "elements": ["meta"]
	},

    "icon": {
        "description": "Especifica uma imagem na qual represente o comando",
        "elements": ["command"]
	},

    "id": {
        "description": "Frequentemente usado com CSS para estilizar um elemento específico. O valor deste atributo deve ser único",
        "elements": ["Atributo Global"]
	},

    "ismap": {
        "description": "Indica que a imagem é parte de um mapa de imagem sever-side",
        "elements": ["img"]
	},

    "itemprop": {
        "description": "",
        "elements": ["Atributo Global"]
	},

    "keytype": {
        "description": "Especifica o tipo de chave gerada",
        "elements": ["keygen"]
	},

    "kind": {
        "description": "Especifica o tipo de caminho de texto",
        "elements": ["track"]
	},

    "label": {
        "description": "Especifica um título user-releadable de um caminho de texto",
        "elements": ["track"]
	},

    "lang": {
        "description": "Define o idioma usado no elemento",
        "elements": ["Atributo Global"]
	},

    "language": {
        "description": "Define o idioma do script usado no elemento",
        "elements": ["script"]
	},

    "list": {
        "description": "Identifica uma lista de opções pré definidas para sugerir ao usuário",
        "elements": ["input"]
	},

    "loop": {
        "description": "Indica se a mídia deveria começar tocando do começo quando ela é finalizada",
        "elements": ["audio", "bgsound", "marquee", "video"]
	},

    "low": {
        "description": "Indica o maior limite da menor distância",
        "elements": ["meter"]
	},

    "manifest": {
        "description": "Especifica a URL do cache manifest do documento",
        "elements": ["html"]
	},

    "max": {
        "description": "Indica o valor máximo permitido",
        "elements": ["input", "meter", "progress"]
	},

    "maxlenght": {
        "description": "Define o núemro máximo de caracteres permitido no elemento",
        "elements": ["input", "textarea"]
	},

    "media": {
        "description": "Especifica uma sugestão da mídia para qual recurso ligado foi designado",
        "elements": ["a", "area", "link", "source", "style"]
	},

    "method": {
        "description": "Define qual método HTTP usar quando enviar um formulário. Pode ser GET(padrão) ou POST",
        "elements": ["form"]
	},

    "min": {
        "description": "Indica o valor mínimo permitido",
        "elements": ["input", "meter"]
	},

    "multiple": {
        "description": "Indica se múltiplos valores podem ser inseridos em uma entrada do tipo email ou file",
        "elements": ["input", "select"]
	},

    "name": {
        "description": "Nome do elemento. Por exemplo usado pelo servidor para identificar os campos no envio do formulário",
        "elements": ["button", "form", "fieldset", "iframe", "input", "keygen", "object", "output", "select", "textarea", "map", "meta", "param"]
	},

    "novalidate": {
        "description": "Este atributo indica que o formulário não deveria ser validado quando enviado",
        "elements": ["form"]
	},

    "open": {
        "description": "Indica se os detalhes serão mostrados no carregamento da página",
        "elements": ["details"]
	},

    "optimum": {
        "description": "Indica o valor numérico optimal",
        "elements": ["meter"]
	},

    "pattern": {
        "description": "Define uma espreção regular na qual o valor do elemento será validado de encontro",
        "elements": ["input"]
	},

    "ping": {
        "description": "",
        "elements": ["a", "area"]
	},

    "placeholder": {
        "description": "Fornece uma sugestão ao usuário de o que pode ser inserido no campo",
        "elements": ["input", "textarea"]
	},

    "poster": {
        "description": "Uma URL indicando uma poster frame para mostrar desde que o usuário toque ou busque",
        "elements": ["video"]
	},

    "preload": {
        "description": "Indica se todo o recurso, partes dele ou nada deveria ser pré carregado",
        "elements": ["video", "video"]
	},

    "pubdate": {
        "description": "Indica se esta data e tempo é a data no mais próximo elemento antecessor <article>",
        "elements": ["time"]
	},

    "radiogroup": {
        "description": "Indica se esta data e tempo é a data no mais próximo elemento antecessor <article>",
        "elements": ["command"]
	},

    "readonly": {
        "description": "Indica se o elemento pode ser editado",
        "elements": ["input", "textarea"]
	},

    "rel": {
        "description": "Especifica o relacionamento do objeto alvo para o objeto ligado",
        "elements": ["a", "area", "link"]
	},

    "required": {
        "description": "Indica se este elemento é requerido para preencher ou não",
        "elements": ["input", "select", "textarea"]
	},

    "reversed": {
        "description": "Indica se a lista deveria ser mostrada em uma ordem decrescente em vez de uma crescente",
        "elements": ["ol"]
	},

    "rows": {
        "description": "Define o número de linhas em uma área de texto",
        "elements": ["textarea"]
	},

    "rowspan": {
        "description": "Define o número de linhas que uma célula de tabela deveria abranger mais",
        "elements": ["td", "th"]
	},

    "sandbox": {
        "description": "",
        "elements": ["iframe"]
	},

    "spellcheck": {
        "description": "Indica se o spell de checagem está permitido para o elemento",
        "elements": ["Atributo Global"]
	},

    "scope": {
        "description": "",
        "elements": ["th"]
	},

    "scoped": {
        "description": "",
        "elements": ["style"]
	},

    "seamless": {
        "description": "",
        "elements": ["iframe"]
	},

    "selected": {
        "description": "Define o valor na qual será selecionado no carregamento da página",
        "elements": ["option"]
	},

    "shape": {
        "description": "",
        "elements": ["a", "area"]
	},

    "size": {
        "description": "Define a largura do elemento (em pixels). Se o elemento de atributo type é text ou password então este é o número de caracteres",
        "elements": ["input", "select"]
	},

    "sizes": {
        "description": "",
        "elements": ["link"]
	},

    "span": {
        "description": "",
        "elements": ["col", "colgroup"]
	},

    "src": {
        "description": "URL de um conteúdo incorporável",
        "elements": ["audio", "embed", "iframe", "img", "input", "script", "source", "track", "video"]
	},

    "srcdoc": {
        "description": "",
        "elements": ["iframe"]
	},

    "srclang": {
        "description": "",
        "elements": ["track"]
	},

    "start": {
        "description": "Define o primeiro número se não for 1",
        "elements": ["ol"]
	},

    "step": {
        "description": "",
        "elements": ["input"]
	},

    "style": {
        "description": "Define estilos CSS na qual ultrapassarão estilos previamente configurados",
        "elements": ["Atributo Global"]
	},

    "summary": {
        "description": "",
        "elements": ["table"]
	},

    "tabindex": {
        "description": "Ultrapassa a ordem de tabulação padrão do navegador e segue o especificado como alternativa",
        "elements": ["Atributo Global"]
	},

    "target": {
        "description": "Ultrapassa a ordem de tabulação padrão do navegador e segue o especificado como alternativa",
        "elements": ["a", "area", "base", "form"]
	},

    "title": {
        "description": "Texto a ser mostrado em uma dica quando suspenso sobre um elemento",
        "elements": ["Atributo Global"]
	},

    "type": {
        "description": "Define o tipo de elemento",
        "elements": ["button", "input", "command", "embed", "object", "script", "source", "style", "menu"]
	},

    "usemap": {
        "description": "",
        "elements": ["img", "input", "object"]
	},

    "value": {
        "description": "Define o valor padrão na qual será mostrado no elemento no carregar da página",
        "elements": ["button", "option", "input", "li", "meter", "progress", "param"]
	},

    "width": {
        "description": "Em algumas instâncias, tal como <div>, este é um atributo legado, no caso da propriedade CSS width deveria ser usado ao em vez. em outros casos, tal como <canvas>, a largura deve ser especificada com este atributo",
        "elements": ["canvas", "embed", "iframe", "img", "input", "object", "video"]
	},

    "wrap": {
        "description": "Indica se o texto deveria ser enrolado",
        "elements": ["textarea"]
	}
}