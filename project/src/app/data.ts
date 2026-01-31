
export interface CoreConcept {
  image: string;
  title: string;
  description: string;
}

export interface Example {
  title: string;
  description: string;
  code: string;
}

export const CORE_CONCEPTS: CoreConcept[] = [
  {
    image: 'assets/components.png',
    title: 'Components',
    description: 'The core UI building block - compose the user interface by combining multiple components.'
  },
  {
    image: 'assets/jsx-ui.png',
    title: 'JSX',
    description: 'Return JSX code to define the actual markup that will be rendered.                                                                                   '
  },
  {
    image: 'assets/config.png',
    title: 'Props',
    description: 'Make components configurable by passing input data to them.'
  },
  {
    image: 'assets/state-mgmt.png',
    title: 'State',
    description: 'Angular-managed data which, when changed, causes the component to re-render.'
  }
];

export const EXAMPLES: { [key: string]: Example } = {
  components: {
    title: 'Components',
    description: 'Components are the building blocks of Angular applications. They control a patch of screen called a view.',
    code: `@Component({
  selector: 'app-welcome',
  standalone: true,
  template: '<h1>Welcome to Angular!</h1>'
})
export class WelcomeComponent {}`
  },
  jsx: {
    title: 'JSX-like Templates',
    description: 'Angular uses HTML templates with special syntax for data binding and directives.',
    code: `<div>
  <h2>{{ title }}</h2>
  <p *ngIf="isVisible">This is visible!</p>
</div>`
  },
  props: {
    title: 'Props (Inputs)',
    description: 'Components can accept input data from parent components using @Input decorator.',
    code: `@Component({
  selector: 'app-user',
  template: '<p>Hello {{ name }}!</p>'
})
export class UserComponent {
  @Input() name: string = '';
}`
  },
  state: {
    title: 'State Management',
    description: 'Components maintain their own state which triggers re-rendering when updated.',
    code: `export class CounterComponent {
  count = 0;
  
  increment() {
    this.count++;
  }
}`
  }
};