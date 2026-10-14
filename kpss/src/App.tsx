import { useRoute } from './router';
import { dismissMessage, usePendingMessages } from './store';
import Home from './components/Home';
import Study from './components/Study';
import Flashcards from './components/Flashcards';
import Quiz from './components/Quiz';
import Exam from './components/Exam';
import Letters from './components/Letters';
import MessagePopup from './components/MessagePopup';

export default function App() {
  const route = useRoute();
  const pending = usePendingMessages();

  let page;
  switch (route.path) {
    case '/calis':
      page = <Study />;
      break;
    case '/kart':
      page = <Flashcards key={route.key} params={route.params} />;
      break;
    case '/test':
      page = <Quiz key={route.key} params={route.params} />;
      break;
    case '/deneme':
      page = <Exam key={route.key} params={route.params} />;
      break;
    case '/mesajlar':
      page = <Letters />;
      break;
    default:
      page = <Home />;
  }

  return (
    <>
      {page}
      {pending.length > 0 && <MessagePopup id={pending[0]} onClose={dismissMessage} />}
    </>
  );
}
