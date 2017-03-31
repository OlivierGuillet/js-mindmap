// load the mindmap
$(document).ready(function () {

  // enable the mindmap in the body
  $('body').mindmap();

  var content = {
    "children": [
      {
        "name": "Economique",
        "picto": "picto_economique.png",
        "color": "#7AB800",
        "children": [
          {
            "name": "Saisie des temps</br>par les prestataires",
            "color": "#7AB800"
          },
          {
            "name": "Le budget de</br>mon projet",
            "color": "#7AB800",
            "children": [
              {
                "name": "DDSI Voyage",
                "color": "#7AB800"
              },
              {
                "name": "DDSI Transilien",
                "color": "#7AB800"
              },
              {
                "name": "DD DO-DP",
                "color": "#7AB800"
              },
              {
                "name": "DDSI Train</br>Direction",
                "color": "#7AB800"
              },
              {
                "name": "DDSI TER &<br>Intercités",
                "color": "#7AB800"
              },
              {
                "name": "DD APPUI",
                "color": "#7AB800"
              },
              {
                "name": "DDSI</br>Production</br>Ferroviaire",
                "color": "#7AB800"
              },
              {
                "name": "DDSI Gare &</br>Connexion",
                "color": "#7AB800"
              },
              {
                "name": "DDSI Distribution",
                "color": "#7AB800"
              },
              {
                "name": "DDSI Matériel",
                "color": "#7AB800"
              }
            ]
          },
          {
            "name": "Référentiel des</br>codes projets",
            "color": "#7AB800"
          },
          {
            "name": "Chiffrage</br>de mon projet",
            "color": "#7AB800"
          },
        ]
      },
      {
        "name": "Logistique",
        "picto": "picto_logistique.png",
        "color": "#7AB800",
      },
      {
        "name": "Mes fournisseurs</br>et prestataires",
        "picto": "picto_fournisseurs_prestataires.png",
        "color": "#7AB800",
      },
      {
        "name": "Ressources</br>humaines",
        "picto": "picto_economique.png",
        "color": "#7AB800",
      },/*
      {
        "name": "Technologie",
        "picto": "picto_technologie.png",
        "color": "#FFB612",
      },
      {
        "name": "Aide</br>Méthodo",
        "picto": "picto_aide_methodo.png",
        "color": "#FFB612",
      },
      {
        "name": "Boîte à</br>outils",
        "picto": "picto_boite_outils.png",
        "color": "#FFB612",
      },*/
      {
        "name": "Glossaire",
        "picto": "picto_glossaire.png",
        "color": "#0088CE",
      },
      {
        "name": "Conduite du</br>changement",
        "picto": "picto_conduite_changement.png",
        "color": "#CB0044",
      },
      {
        "name": "Prise de</br>recul",
        "picto": "picto_prise_recul.png",
        "color": "#CB0044",
      },
      {
        "name": "Communication",
        "picto": "picto_communication.png",
        "color": "#CB0044",
      },
    ]
  };


  // add the data to the mindmap
  var root = $('body').addRootNode("T", {
    href: '/',
    url: '/',
    onclick: function (node) {
      $(node.obj.activeNode.content).each(function () {
        this.hide();
      });
    }
  });


  var addChild = function (element, parentnode) {

    this.mynode = $('body').addNode(parentnode, element.name, {
      onclick: function (node) {
        $(node.obj.activeNode.content).each(function () {
          this.hide();
        });
        $(node.content).each(function () {
          this.show();
        });
      },
      picto: element.picto,
      color: element.color
    });

    $(this).hide();

    var currentNode = this.mynode;

    if (element.children) {
      element.children.forEach(function (child, index) {
        addChild(child, currentNode);
      });
    }

  };

  content.children.forEach(function (child, index) {
    addChild(child, root);
  });

});   