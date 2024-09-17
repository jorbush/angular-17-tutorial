import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h3>Comments</h3>
    <img src="https://media.npr.org/assets/img/2023/01/14/this-is-fine_custom-b7c50c845a78f5d7716475a92016d52655ba3115.jpg"
      alt="comments image"/>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore officiis quas quia eveniet. Est, debitis accusamus id non natus culpa itaque exercitationem quam quisquam consequuntur officiis ut similique, illum deleniti?
    </p>
  `,
  styles: `
    img {
      width: 100%;
      height: auto;
    }
  `
})
export class CommentsComponent {

}
