export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    contacts: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    ////////// nuevo contacto
    case 'add_contact':

      return {
        ...store, contacts: [...store.contacts, action.payload]
      };

///// traer contactos
    case 'get_contact':

      return {
        ...store, contacts: action.payload

      };
      /// editar contactos
          case 'edit_contact':

      return {
        ...store, contacts: store.contacts.map(c => c.id === action.payload.id ? action.payload :c)

      };

      ///// eliminar contacto
      case 'delete_contact':

      return {
        ...store, contacts: store.contacts.filter(c => c.id !== action.payload)

      };

    default:
      console.error("Acción desconocida:", action);
      throw Error('Unknown action.');
  }
}
