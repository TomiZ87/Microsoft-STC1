import Message from "./message/Message";

class App {

    private messages: Array<Message> = [
        new Message('Josh', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'),
        new Message('Hoch', 'Vivamus id elit sed nisl fermentum pretium.'),
        new Message('Jake', 'Nulla faucibus metus et lorem dictum pretium.'),
        new Message('Paul', 'Curabitur consectetur metus semper gravida lacinia.'),
        new Message('Logan', 'Maecenas eget libero varius, porta ligula in, imperdiet dui.'),
        new Message('Kate', 'Nunc nec velit accumsan, condimentum libero non, condimentum nisl.'),
        new Message('Steve', 'Mauris ultricies massa pellentesque, venenatis massa non, ornare enim.'),
        new Message('Bill', 'Ut at arcu finibus, vehicula justo vel, suscipit arcu.')
    ]


    constructor() {
        console.log('Messages:');
        this.messages.forEach(message => {
            console.log(message.getAuthor(), 'said:', message.getMessage());
        })
        console.log('End of messages!');
    }

}

export default App;