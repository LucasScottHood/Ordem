Desenvolver um sistema bancário, cadastrando usuário e gerando aleatoriamente um número de conta e um username. Neste cadastro, deve se ter um depósito inicial na conta, nome do cliente, senha. O usuário deverá entrar no sistema via login e senha.  Seu login é seu username e a senha. Ao entrar no sistema, o usuário tem alguns menus como EXTRATO,  PAGAMENTOS E TRANSFERÊNCIAS.

No EXTRATO tem todo o detalhamento de compras via débito, transferências, boletos, e crédito (salário, ou transferência realizada). Deve ter um campo data para armazenar a data em que foram realizadas as transações. Cada transação deve ter uma descrição pequena (ex: aplicação poup; resgate poup. pag. boleto, pag pix. etc).



!!!!!!Analisar toda e qualquer inconsistência (ex: comprar sem saldo, etc).!!!!!!!

No Menu de PAGAMENTOS , deve ter opções para escolher pagamento via pix, boletos, debito. (no nosso sistema não tem diferença entre eles, apenas irá aparecer no extrato se foi pago com boleto, pix, etc).
Cada vez que ocorre pagamento, o valor do saldo é diminuído com o valor a ser pago.


Por último, o menu TRANSFERÊNCIA, o usuário irá transferir uma quantia para uma conta destino. ( deve-se saber o numero desta conta).
A quanta deve ser diminuída do saldo atual e somada ao saldo da conta destino).

Cada Cliente tem login e senha.
DUPLAS!! Era isso!! Abraço

--

Desenvolver um sistema bancário, cadastrando usuário e gerando aleatoriamente um número de conta e um username. Neste cadastro, deve se ter um depósito inicial na conta, nome do cliente, senha.





A senha deve ser armazenada no banco de dados usando  password_hash para embaralhamento de senha. 

$password = "user_secret_password";

// Generates a secure hash with a random salt
$hash = password_hash($password, PASSWORD_BCRYPT);



Exemplo de uso: 
$userInput = $_POST['password'];
$storedHash = '$2y$10$...'; // Pega do banco de dados

if (password_verify($userInput, $storedHash)) {
    echo "Password is valid!";
} else {
    echo "Invalid password.";
}

 O usuário deverá entrar no sistema via login e senha.  Seu login é seu username e a senha. Ao entrar no sistema, o usuário tem alguns menus como EXTRATO,  PAGAMENTOS E TRANSFERÊNCIAS.

No EXTRATO tem todo o detalhamento de compras via débito, transferências, boletos, e crédito (salário, ou transferência realizada). Deve ter um campo data para armazenar a data em que foram realizadas as transações. Cada transação deve ter uma descrição pequena (ex: aplicação poup; resgate poup. pag. boleto, pag pix. etc).



!!!!!!Analisar toda e qualquer inconsistência (ex: comprar sem saldo, etc).!!!!!!!

No Menu de PAGAMENTOS , deve ter opções para escolher pagamento via pix, boletos, debito. (no nosso sistema não tem diferença entre eles, apenas irá aparecer no extrato se foi pago com boleto, pix, etc).
Cada vez que ocorre pagamento, o valor do saldo é diminuído com o valor a ser pago.


Por último, o menu TRANSFERÊNCIA, o usuário irá transferir uma quantia para uma conta destino. ( deve-se saber o numero desta conta).
A quanta deve ser diminuída do saldo atual e somada ao saldo da conta destino).

Cada Cliente tem login e senha.
DUPLAS!! Era isso!! Abraço




Uso de sessoes no CODEIGNITER: 



Em CodeIgniter, as sessões permitem manter o "estado" do usuário enquanto ele navega pelo site. O comportamento da biblioteca de sessões varia entre as versões 3 e 4. Abaixo, apresento como utilizá-las em ambas: [1, 2, 3]
CodeIgniter 4 (Versão Atual)
No CI4, o gerenciamento de sessões é feito através de serviços ou da função auxiliar session(). [4]
Inicialização: O serviço de sessão costuma rodar automaticamente. Para acessá-lo manualmente em um controlador, use: $session = \Config\Services::session(); ou simplesmente a função global session().
Adicionar Dados: Use o método set().
$session->set('item', 'valor');
// Ou com um array
$session->set(['user' => 'admin', 'logged_in' => true]);
Recuperar Dados: Use o método get().
$username = $session->get('user'); // Retorna null se não existir
Flashdata: Dados que duram apenas até a próxima requisição (úteis para mensagens de erro/sucesso).
$session->setFlashdata('success', 'Cadastro realizado!');
$msg = $session->getFlashdata('success');
Encerrar Sessão: $session->destroy();. [4, 5]
CodeIgniter 3 (Versão Anterior) [6]
No CI3, a biblioteca de sessões deve ser carregada manualmente ou via autoload. [7]
Carregamento: No controlador, use $this->load->library('session'); ou adicione no arquivo application/config/autoload.php.
Adicionar Dados: Use o método set_userdata().
$this->session->set_userdata('item', 'valor');
Recuperar Dados: Use o método userdata().
$item = $this->session->userdata('item');
Remover Dados: $this->session->unset_userdata('item');.
Encerrar Sessão: $this->session->sess_destroy();. [8, 9, 10, 11, 12]
Configurações Importantes
Usar duas tabelas de CODEIGNITER



Para usar duas tabelas em um relacionamento 1:N (um para muitos) no Laravel Eloquent, você define os relacionamentos nos models correspondentes usando os métodos hasMany (um para muitos) e belongsTo (muitos para um)
Aqui está um guia passo a passo usando o exemplo clássico: uma Categoria (1) tem vários Produtos (N).
1. Estrutura do Banco de Dados (Migrations)
A tabela "filha" (produtos) precisa de uma chave estrangeira apontando para a tabela "pai" (categorias). 
php

// Tabela: categorias
Schema::create('categories', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->timestamps();
});

// Tabela: products (filha)
Schema::create('products', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    // Chave estrangeira
    $table->foreignId('category_id')->constrained(); 
    $table->timestamps();
});
2. Definindo os Relacionamentos no Model
Model Categoria (app/Models/Category.php)
Uma categoria possui muitos produtos (hasMany).
php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category extends Model
{
    public function products(): HasMany
    {
        return $this->hasMany(Product::class);
    }
}
Model Produto (app/Models/Product.php)
Um produto pertence a uma categoria (belongsTo).
php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{
    // Opcional: permitir mass assignment
    protected $fillable = ['name', 'category_id'];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
}
3. Como usar (Controller/View)
Após definir as funções nos models, você pode acessar os dados facilmente
Acessar produtos de uma categoria (1 para N):
php

$category = Category::find(1);
// Retorna uma coleção de produtos relacionados
$products = $category->products; 

foreach ($products as $product) {
    echo $product->name;
}
Acessar a categoria de um produto (N para 1):
php

$product = Product::find(1);
// Retorna o objeto da categoria
echo $product->category->name; 
Eager Loading (Melhorar performance - evitar N+1):
php

// Busca todos os produtos e suas categorias de uma vez
$products = Product::with('category')->get();

foreach ($products as $product) {
    echo $product->name . ' - ' . $product->category->name;
}
Dicas importantes
Convenção de Nomes: O Laravel assume que a chave estrangeira é nome_da_tabela_singular_id (ex: category_id na tabela products).
Personalização: Se não seguir a convenção, você pode passar as chaves manualmente: return $this->hasMany(Product::class, 'foreign_key', 'local_key');. 
YouTubeYouTube





Bibiografia
[1] https://www.codeigniter.com
[2] https://code.tutsplus.com
[3] https://stackoverflow.com
[4] https://codeigniter.com
[5] https://www.upgrad.com
[6] https://codeigniter4.github.io
[7] https://www.slideshare.net
[8] https://www.codeigniter.com
[9] https://stackoverflow.com
[10] https://stackoverflow.com
[11] https://www.codeigniter.com
[12] https://www.finalroundai.com
[13] https://codeigniter.com
[14] https://stackoverflow.com