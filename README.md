hackathon

Hackathon Timer
VinHack - VinnovateIT
Um cronômetro para Hackathon com atualizações ao vivo do GitHub.
Feito isso para VinHack - um hackathon por VinnovateIT
Sobre o VinHack
VinHack foi uma hackathon organizada por VinnovateIT no VIT Vellore. A equipe organizadora foi liderada por Shreya Anand, presidente da VinnovateIT. Tive a honra de ser membro do painel de juízes. Essa foi uma ótima experiência para mim.

Minha contribuição inclui:

Monitorando o desenvolvimento do site
Desenvolvido ir para o lugar para os participantes
Criou um concurso para os participantes
Declarações de problemas feitos
Este é o cronômetro básico que eu criei para o VinHack. Ele mostra as notificações para os commits feitos na organização VinnovateIT GitHub. Isso ajuda a aumentar a energia dos participantes. Se você está organizando uma hackathon, pode usar isso! Basta alterar o URL abaixo com o URL da sua organização e pronto!

Confira a demonstração ao vivo aqui!
Começo rápido
API do GitHub

Faça as seguintes alterações no index.html

var settings = {
         "assíncrono": verdadeiro,
         "crossDomain": true,
         // substitua seu nome de usuário organizacional abaixo
         "url": "https://api.github.com/orgs/vinnovateit/events",
         "method": "GET",
         "cabeçalhos": {
             "Autorização": "XXXXXXXXXXXXXXXXXXX" // substitua-o pelo seu token
          }
e aqui vai você!

Saiba mais sobre a API do GitHub.

Confira o site oficial do VinHack.

Obrigado!
   __________
  / ____ / / ___ _____ / / / / _____
 / / __ / / __ `/ __ / / __ / __ \
/ / _ / / / / _ / / _ / / / / _ / / _ / /
\ __________, _____, _ / \ __ / \ ____ /
  / ___ / _ \ / _ \
 (__) __ / __ / __ __
/ ____ / \ __________ __ / / _ ___ ________ / /
  / / / / __ \ / / / / / __ \ / _ \ / ___ / _ \ / /
 / / _ / / / _ / / / _ / / / / / / __ / / / __ / _ /
 \ __, / \ ____ / \ __, _ / / _ / / _ / \ ___ / _ / \ ___ (_)
/ ____ /
