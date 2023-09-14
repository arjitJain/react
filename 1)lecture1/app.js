const root = ReactDOM.createRoot(document.getElementById('root'));
const heading1 = React.createElement('h1', {
    id: 'head1',
    style:{color:'red'},
}, 'hello1');
const heading2 = React.createElement('h1', {
    id: 'head2'
}, 'hello2');
const container = React.createElement('div', {
    id: 'container'
},[heading1,heading2]);
// heading.innerHTML = 'hello everybody';
// root.appendChild(heading);
root.render(container);