import { Aside } from "./components/Aside";
import { Container } from "./components/Container";
import { Main } from "./components/Main";
import { SearchInput } from "./components/SearchInput";
import { Typography } from "./components/Typography";
import Card from "./components/Card";
import { DailyBudget } from "./components/DailyBudget";
import { SavingsStatus } from "./components/SavingsStatus";

import { Transactions } from "./components/Transactions";
import { Accounts } from "./components/Accounts";

function App() {
  return (
    <div className="bg-neutral-background min-h-screen">
      <Container>
        <Aside />
        <Main>
            <SearchInput />
            <div>
              <Typography variant="h1">Olá, Mr.Thompson!</Typography>
              <Typography variant="body">
                Aqui está uma breve descrição das suas finanças.
              </Typography>
            </div>
            <section className="grid grid-cols-2 items-stretch gap-6">
              <Card>
                <Card.Header>Orçamento diário disponível:</Card.Header>
                <Card.Body>
                  <DailyBudget value={200} />
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>Progresso da meta financeira</Card.Header>
                <Card.Body>
                  <SavingsStatus percent={40} />
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>Movimentação financeira</Card.Header>
                <Card.Body>
                  <Transactions />
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>Minhas contas</Card.Header>
                <Card.Body>
                  <Accounts />
                </Card.Body>
              </Card>
            </section>
        </Main>
      </Container>
    </div>
  );
}

export default App;
