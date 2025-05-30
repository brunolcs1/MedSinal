// leitor de qr code
const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Mudança Buttons
const client = new Client();
// serviço de leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
// apos isso ele diz que foi tudo certo
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});
// E inicializa tudo 
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // Função que usamos para criar o delay entre uma ação e outra

// Funil

client.on('message', async msg => {

    if (msg.body.match(/(taci|TACI|menu|Menu|dia|tarde|noite|oi|Oi|Olá|olá|ola|Ola)/i) && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'Olá! '+ name.split(" ")[0] + 'Sou a assistente virtual TACI da MedSinal. Como posso ajudá-lo hoje? Por favor, digite uma das opções abaixo:\n\n1 - Quem somos?\n2 - Sobre saúde sexual\n3 - O que é HIV?\n4 - Como saber se tenho alguma IST?\n5 - Outras perguntas'); //Primeira mensagem de texto
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(5000); //Delay de 5 segundos
    }




    if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'QUEM SOMOS?\nA MedSinal é uma plataforma digital que promove saúde sexual com foco na prevenção e combate às ISTs.\n\nContamos com a TACI, nossa assistente virtual, que oferece atendimento gratuito e anônimo 24h por dia pelo WhatsApp.\n\nNosso objetivo é centralizar informações confiáveis, combater a desinformação e facilitar');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Sou a assistente virtual TACI da MedSinal. Como posso ajudá-lo hoje? Por favor, digite uma das opções abaixo:\n\n1 - Quem somos?\n2 - Sobre saúde sexual\n3 - O que é HIV?\n4 - Como saber se tenho alguma IST?\n5 - Outras perguntas');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Encontre mais informações em nosso site: https://projeto-med-sinal-beta.vercel.app');


    }

    if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'SOBRE SAÚDE SEXUAL\nSaúde sexual vai muito além da prevenção de infecções. Envolve bem-estar físico, emocional e social relacionado à sexualidade.\n\nCom a MedSinal, você tem acesso a conteúdos educativos, ferramentas interativas e suporte profissional para viver sua sexualidade com segurança e informação.\n\nA TACI está disponível para te orientar sobre ISTs, métodos contraceptivos, vacinas, testes e muito mais.');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Encontre mais informações em nosso site: https://projeto-med-sinal-beta.vercel.app');
    }

    if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'O QUE É HIV?\nHIV é o vírus da imunodeficiência humana, que ataca o sistema imunológico e pode levar à AIDS se não tratado.\n\nEle é transmitido principalmente por relações sexuais desprotegidas, compartilhamento de seringas e da mãe para o bebê durante a gestação ou amamentação.\n\nA MedSinal, por meio da TACI, oferece informações seguras sobre prevenção, testagem, PrEP, PEP e acompanhamento.');
        
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Encontre mais informações em nosso site: https://projeto-med-sinal-beta.vercel.app');

    }

    if (msg.body !== null && msg.body === '4' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'COMO SABER SE TENHO ALGUMA IST?\nAlgumas ISTs podem não apresentar sintomas no início. Por isso, fazer testes regularmente é fundamental.\n\nSinais como feridas, corrimentos, dor ao urinar ou durante o sexo podem indicar uma IST.\n\nCom a TACI, você recebe orientações sobre sintomas, pode localizar postos de testagem gratuitos próximos e agendar teleconsultas com profissionais voluntários da MedSinal.');


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Encontre mais informações em nosso site: https://projeto-med-sinal-beta.vercel.app');


    }

    if (msg.body !== null && msg.body === '5' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Se você tiver outras dúvidas ou precisar de mais informações, por favor, fale aqui nesse whatsapp ou visite nosso site: https://projeto-med-sinal-beta.vercel.app ');


    }








});