export const Questions = [
  {
    question:
      "Qu’est-ce qu’un module dans Ansible ?",
    answers: ["A. Un serveur distant utilisé pour l'exécution des tâches", "B. Une fonctionnalité permettant d'organiser les rôles dans un playbook", "C. Un composant réutilisable permettant d’effectuer une tâche spécifique (ex : copier un fichier, installer un paquet)"],
    correct: "C. Un composant réutilisable permettant d’effectuer une tâche spécifique (ex : copier un fichier, installer un paquet)",
  },
  {
    question:
      "Quel module Ansible permet d’installer un paquet sur une machine Debian/Ubuntu ?",
    answers: ["A. yum", "B. apt", "C. rpm"],
    correct: "B. apt",
  },
  {
    question: "Dans un playbook, quel paramètre permet de spécifier les machines ciblées ?",
    answers: ["A. hosts", "B. tasks", "C. inventory"],
    correct: "A. hosts",
  },
  {
    question: "Quelle est l’extension d’un fichier de playbook Ansible ?",
    answers: ["A. .ini", "B. .sh", "C. .yaml ou .yml"],
    correct: "C. .yaml ou .yml",
  },
  {
    question:
      "À quoi sert le fichier inventory dans Ansible ?",
    answers: ["A. À stocker les résultats des tâches", "B. À indiquer la liste des machines sur lesquelles exécuter les tâches", "C. À définir les variables d’environnement"],
    correct: "B. À indiquer la liste des machines sur lesquelles exécuter les tâches",
  },
  {
    question: "Que fait la commande ansible-playbook --check monplaybook.yaml",
    answers: ["A. Elle exécute le playbook uniquement sur les hôtes de test", "B. Elle simule l'exécution du playbook sans rien modifier réellement sur les machines", "C. ansible-validate monplaybook.yaml"],
    correct: "B. Elle simule l'exécution du playbook sans rien modifier réellement sur les machines",
  },
  {
    question:
      "Quel format est le plus courant pour un fichier inventory statique ?",
    answers: ["A. INI", "B. JSON", "C. CSV"],
    correct: "A. INI",
  },
  {
    question: "Quelle commande permet de lancer un playbook ?",
    answers: [
      "A. ansible",
      "B. ansible-pull",
      "C. ansible-playbook",
    ],
    correct: "C. ansible-playbook",
  },
  {
    question:
      "Quel module Ansible permet de copier un fichier local vers une machine distante ?",
    answers: ["A. fetch", "B. copy", "C. file"],
    correct: "B. copy",
  },
  {
    question:
      "Quelle commande permet d’afficher la liste des hôtes définis dans un fichier d’inventaire ?",
    answers: ["A. ansible-playbook --list-hosts", "B. ansible --list-hosts", "C. ansible-inventory --list"],
    correct: "C. ansible-inventory --list",
  },
];
