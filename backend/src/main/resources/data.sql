INSERT INTO QUESTION (heading, answer_index) VALUES ('Em javascript, qual a diferença entre Set e Map?', 2);
INSERT INTO ALTERNATIVE (alternative, question_id) VALUES ('Os dois são conjuntos de objetos, porém o Set permite objetos duplicados, já o Map, não.', 1);
INSERT INTO ALTERNATIVE (alternative, question_id) VALUES ('A diferença entre o Set e o Map é que o Map permite chaves duplicadas, já o Set, não.', 1);
INSERT INTO ALTERNATIVE (alternative, question_id) VALUES ('Set é um conjunto que não permite objetos duplicados e o Map é uma coleção que trabalha com pares chave e valor.', 1);
INSERT INTO ALTERNATIVE (alternative, question_id) VALUES ('Map é uma coleção de pares chave e valor e não permite objetos duplicados, já o Set é um conjunto de objetos que permite objetos duplicados.', 1);

INSERT INTO QUESTION (heading, answer_index) VALUES ('O que é closure em javascript?', 0);
INSERT INTO ALTERNATIVE (alternative, question_id) VALUES ('É uma função que "lembra" seu escopo, mesmo quando é executada fora desse escopo.', 2);
INSERT INTO ALTERNATIVE (alternative, question_id) VALUES ('É uma função que não possui acesso a variável das funções exteriores após o retorno da função exterior.', 2);
INSERT INTO ALTERNATIVE (alternative, question_id) VALUES ('É uma variável que armazena referências para as variáveis da função exterior.', 2);
INSERT INTO ALTERNATIVE (alternative, question_id) VALUES ('É um tipo de escopo que possui acesso a variáveis externas desse escopo.', 2);

INSERT INTO QUESTION (heading, answer_index) VALUES ('No CSS, qual a diferença entre pseudo-classes e pseudo-elementos?', 1);
INSERT INTO ALTERNATIVE (alternative, question_id) VALUES ('A diferença entre pseudo-classes e pseudo-elementos é que pseudo-classes utilizam ":" como prefixo e pseudo-elementos utilizam "::".', 3);
INSERT INTO ALTERNATIVE (alternative, question_id) VALUES ('Pseudo-classes são palavras-chave que especificam um estado especial do elemento selecionado, já pseudo-elementos permitem que você estilize uma parte específica do elemento selecionado.', 3);
INSERT INTO ALTERNATIVE (alternative, question_id) VALUES ('Pseudo-elementos especificam um estado especial do elemento selecionado e pseudo-classes especificam uma parte especifica do elemento.', 3);
INSERT INTO ALTERNATIVE (alternative, question_id) VALUES ('Pseudo-classes especificam um estado especial do elemento e pseudo-elementos permitem estilizar uma parte específica do elemento. Exemplo de sintaxe: p:first-line(pseudo-elemento) e p::hover(pseudo-classe).', 3);

INSERT INTO QUESTION (heading, answer_index) VALUES ('Quais tags HTML são usadas para exibir os dados na forma tabular?', 3);
INSERT INTO ALTERNATIVE (alternative, question_id) VALUES ('table, trow, thead e tdescription.', 4);
INSERT INTO ALTERNATIVE (alternative, question_id) VALUES ('table, tr, tf e td.', 4);
INSERT INTO ALTERNATIVE (alternative, question_id) VALUES ('table, tablehead, tablebody, td e tr.', 4);
INSERT INTO ALTERNATIVE (alternative, question_id) VALUES ('table, thead, tbody, tfoot, th, td e tr.', 4);

INSERT INTO QUESTION (heading, answer_index) VALUES ('Qual a principal diferença entre CSS Grid e Flexbox?', 2);
INSERT INTO ALTERNATIVE (alternative, question_id) VALUES ('CSS Grid não age de forma responsiva, já Flexbox, sim.', 5);
INSERT INTO ALTERNATIVE (alternative, question_id) VALUES ('Flexbox permite até 3 dimensões, já o CSS Grid, apenas 2.', 5);
INSERT INTO ALTERNATIVE (alternative, question_id) VALUES ('CSS Grid trabalha com 2 dimensões, já o Flexbox, com apenas 1.', 5);
INSERT INTO ALTERNATIVE (alternative, question_id) VALUES ('É impossível organizar componentes em apenas uma linha com CSS Grid, já com Flexbox, é possível.', 5);
