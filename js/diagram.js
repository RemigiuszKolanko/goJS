function init() {
    var $ = go.GraphObject.make;
    var myDiagram = $(go.Diagram, "myDiagram");

    myDiagram.nodeTemplate =
        $(go.Node, "Auto",
            $(go.Shape, "RoundedRectangle",
                { fill: "white" },
                new go.Binding("fill", "color")),  // shape.fill = data.color
            $(go.TextBlock,
                { margin: 5 },
                new go.Binding("text", "key"))  // textblock.text = data.key
        );

    myDiagram.linkTemplate =
        $(go.Link,
            $(go.Shape,
                new go.Binding("stroke", "color"),  // shape.stroke = data.color
                new go.Binding("strokeWidth", "thick")),  // shape.strokeWidth = data.thick
            $(go.Shape,
                { toArrow: "OpenTriangle", fill: null },
                new go.Binding("stroke", "color"),  // shape.stroke = data.color
                new go.Binding("strokeWidth", "thick"))  // shape.strokeWidth = data.thick
        );

    var nodeDataArray = [
        { key: "Alpha", color: "lightblue" },
        { key: "Beta", color: "pink" }
    ];
    var linkDataArray = [
        { from: "Alpha", to: "Beta", color: "blue", thick: 2 }
    ];
    myDiagram.model = new go.GraphLinksModel(nodeDataArray, linkDataArray);

    // Palette
    var myPalette =
        $(go.Palette, "myPalette");

    myPalette.nodeTemplate =
        $(go.Node, "Auto",
            $(go.Shape,
                new go.Binding("fill", "color"),
                new go.Binding("figure", "fig"),
            ),
            $(go.TextBlock,
                new go.Binding("text", "color"))
        );

    myPalette.model.nodeDataArray = [
        { key: "C", color: "blue", fig: "RoundedRectangle" },
        { key: "LC", color: "red", fig: "Rectangle" },
        { key: "A", color: "green", fig: "Triangle" },
        { key: "T", color: "black", fig: "Hexagon", category: "groupContainer" }
    ];

    var simpletemplate =
        $(go.Node, "Auto",
            $(go.Shape, "Ellipse",
                new go.Binding("fill", "color")),
            $(go.TextBlock,
                new go.Binding("GROUP"))
        );

    var myPaletteMap = new go.Map();

    myPaletteMap.add("groupContainer", simpletemplate);
    myPaletteMap.add("", myPalette.nodeTemplate);

    myPalette.nodeTemplateMap = myPaletteMap;
    

    // END Palette



}