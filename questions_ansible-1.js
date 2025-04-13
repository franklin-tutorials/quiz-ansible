export const Questions = [
  {
    question:
      "Qu’est-ce qu’Ansible ?",
    answers: ["A. Un éditeur de texte pour les fichiers de configuration", "B. Un outil d’automatisation de configuration, déploiement et gestion des serveurs", "C. Un antivirus pour serveurs Linux"],
    correct: "B. Un outil d’automatisation de configuration, déploiement et gestion des serveurs",
  },
  {
    question:
      "Quel protocole est utilisé par Ansible pour se connecter aux machines Linux ?",
    answers: ["A. FTP", "B. HTTP", "C. SSH"],
    correct: "C. SSH",
  },
  {
    question: "Le fichier qui contient la liste des machines à gérer avec Ansible s'appelle :",
    answers: ["A. inventory", "B. ansible.cfg", "C. playbook.yaml"],
    correct: "A. inventory",
  },
  {
    question: "Le playbook Ansible est écrit dans quel format ?",
    answers: ["A. XML", "B. JSON", "C. YAML"],
    correct: "C. YAML",
  },
  {
    question:
      "Dans un playbook, que représente tasks ?",
    answers: ["A. Une liste de variables", "B. Une liste de modules", "C. Une liste d’actions à exécuter"],
    correct: "C. Une liste d’actions à exécuter",
  },
  {
    question: "Quelle commande permet de vérifier la syntaxe d’un playbook ?",
    answers: ["A. ansible-playbook --syntax-check monplaybook.yaml", "B. ansible-check monplaybook.yaml", "C. ansible-validate monplaybook.yaml"],
    correct: "A. ansible-playbook --syntax-check monplaybook.yaml",
  },
  {
    question:
      "Quelle est l’une des principales forces d’Ansible ?",
    answers: ["A. Il nécessite un agent installé sur chaque machine", "B. Il permet de créer des jeux vidéo", "C. Il est sans agent (agentless)"],
    correct: "C. Il est sans agent (agentless)",
  },
  {
    question: "Comment afficher un message dans un playbook ?",
    answers: [
      "A. Avec le module debug",
      "B. Avec le module print",
      "C. Avec la commande echo",
    ],
    correct: "A. Avec le module debug",
  },
  {
    question:
      "Quelle est une règle importante de syntaxe en YAML ?",
    answers: ["A. Il faut utiliser des balises de fermeture comme en HTML", "B. L’indentation est obligatoire et doit être faite avec des espaces", "C. Les lignes doivent toujours finir par un point-virgule"],
    correct: "B. L’indentation est obligatoire et doit être faite avec des espaces",
  },
  {
    question:
      "Quelle est la différence entre Ansible et Ansible Red Hat ?",
    answers: ["A. Aucun, ce sont exactement les mêmes outils", "B. Ansible est opensource, Ansible RedHat est une version entreprise avec support et des fonctionnalités supplémentaires", "C. Ansible Red Hat est une version Windows d’Ansible"],
    correct: "B. Ansible est opensource, Ansible RedHat est une version entreprise avec support et des fonctionnalités supplémentaires",
  },
];
