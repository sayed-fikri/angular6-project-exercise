import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TuitionService} from '../../services/tuition.service';
import {PostDataSource} from './post.data-source';
import {Posts} from './post.model';
import {MatDialog, MatDialogConfig, MatSnackBar, MatSnackBarConfig} from '@angular/material';
import {PostCreatorDialog} from './post-creator.dialog';

@Component({
  selector: 'trg-post-list',
  templateUrl: './post-list.page.html',
  styleUrls: ['./post-list.page.scss']
})
export class PostListPage implements OnInit {

  public columns = ['id', 'title', 'body'];
  public dataSource: PostDataSource;


  constructor(private postService: TuitionService,
              private router: Router,
              private dialog: MatDialog,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.dataSource = new PostDataSource(this.postService);
  }

  view(post: Posts): void {
    console.log("Data achieve");
    console.log(JSON.stringify(post));
    this.router.navigate(['/tuition/post/', post.id]);
  }

  show(): void {
    const config = new MatDialogConfig();
    config.width = "600px";
    config.height = "380px";
    const dialogRef = this.dialog.open(PostCreatorDialog, config);
    dialogRef.afterClosed().subscribe(result => {
      this.snackBar.open('Post has been submitted', '',
        <MatSnackBarConfig>{duration: 3000});
    });
  }


}
