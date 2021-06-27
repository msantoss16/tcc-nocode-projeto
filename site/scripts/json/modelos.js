    modelos = {
        "Common": [
            {
                "title": {
                    "html": "h1"
                }
            },
            {
                "paragraph": {
                    "html": "p"
                }
            },
            {
                "icon": {
                    "html": "i"
                }
            },
            {
                "link": {
                    "html": "a"
                }
            },
            {
                "btn":  {
                    "html":"button"
                }
            },
            {
                "image":    {
                    "html":"img"
                },
            }
        ],
        "Text": [
            {
                "paragraph": {
                    "html": "p"
                }
            },
            {
                "title": {
                    "html": "h1"
                }
            },
            {
                "subtitle": {
                    "html": "h3"
                }
            },
            {
                "link": {
                    "html": "a"
                }
            },
            {
                "import":{
                    "html": "link"
                }
            },
            {
                "lbl":  {
                    "html":"label"
                }
            },
            {
                "areaText": {
                    "html":"textarea"
                }
            }
        ],
        "Inputs": [
            {
                "btn": {
                    "html":"button"
                }
            },
            {
                "inputControl":{
                    "html":"input",
                    defaultProperty: {
                        type: ["text", "submit", "time"],
                    }
                }
            },
            {
                "ddList":   {
                    "html":"select",
                    extendsElements: {
                        "optionList":  {
                            "html":"option",
                            defaultProperty: {
                                value: null
                            }
                        },
                    }
                }
            },
        ],
        "Widgets": [
            {
                "image":    {
                    "html":"img"
                }
            },
            {
                "inlineFrame":  {
                    "html":"iframe"
                }
            },
            {
                "svgContainer": {
                    "html":"svg"
                }
            },
            {
                "timer":{
                    "html":"time"
                }
            },
            {
                "progressTask":{
                    "html":"progress"
                }
            }
        ],
        "Container": [
            {
                "box":  {
                    "html":"div"
                }
            },
            {
                "centralize":   {
                    "html": "center"
                }
            },
            {
                "formulary":{
                    "html":"form"
                }
            },
            {
                "spanDocument":{
                    "html":"span"
                }
            }
        ],
        "Layout": [
            {
                "navLink":  {
                    "html":"nav"
                }
            },
            {
                "docSection":{
                    "html":"section"
                }
            },
            {
                "sectionFooter":{
                    "html":"footer"
                }
            }
        ],
        "Tables": [
            {
                "board":    {
                    "html":"table"
                }
            },
            {
                "boardGroup":{
                    "html":"tbody"
                }
            },
            {
                "boardCell":{
                    "html":"td"
                }
            },
            {
                "boardFotter":  {
                    "html":"tfoot"
                }
            },
            {
                "bh":   {
                    "html":"th"
                }
            },
            {
                "bhead":    {
                    "html":"thead"
                }
            },
            {
                "colGrp":{
                    "html":"colgroup",
                    extendsElements: {
                        "colPrp":{
                            "html":"col"
                        },
                    }
                },
            },
            {
                "dlt":{
                    "html":"dl"
                }
            },
            {
                "dtl":{
                    "html":"dt"
                }
            },
            {
                "line":{
                    "html":"li"
                },
            },
            {
                "oList":{
                    "html":"ol"
                }
            },
            {
                "bline":{
                    "html":"tr"
                }
            },
            {
                "unorderedList":{
                    "html":"ul"
                }
            }
        ]
    }