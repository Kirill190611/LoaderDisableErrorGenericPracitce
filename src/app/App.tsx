import './App.css'
import { Decks } from '../features/decks/Decks.tsx'
import { GlobalError } from './GlobalError/GlobalError.tsx'
import { useAppSelector } from './store.ts'
import { LinearLoader } from '../common/components/Loader/LinearLoader.tsx'
import { selectAppStatus } from './app-selectors.ts'

export const App = () => {
  const status = useAppSelector(selectAppStatus)

  return (
    <div>
      {status === 'loading' && <LinearLoader />}
      <Decks />
      <GlobalError />
      <footer>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam asperiores at autem deleniti
        dolore excepturi ipsum laborum provident, quod sed suscipit temporibus voluptas. Architecto debitis explicabo
        nemo sequi sit!
      </footer>
    </div>
  )
}
