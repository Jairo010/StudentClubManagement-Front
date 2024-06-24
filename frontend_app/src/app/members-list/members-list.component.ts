import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from "../shared/shared.module";
import { environment } from '../../environments/environment.development';
import { MetaDataColumn } from '../shared/interfaces/metacolumn.interface';
import { MembersService } from '../services/api_serivices/members/members.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MemberEditFormComponent } from '../member-edit-form/member-edit-form.component';
import { UserService } from '../services/api_serivices/user/user.service';
import { IMembers } from '../interfaces/members.interface';


@Component({
    selector: 'app-members-list',
    standalone: true,
    templateUrl: './members-list.component.html',
    styleUrl: './members-list.component.css',
    imports: [CommonModule, MatButtonModule, MatIconModule, SharedModule]
})
export class MembersListComponent  {
  private membersService = inject(MembersService);
  private userService = inject(UserService);

  data:any = []

  ngOnInit(): void {
    this.loadMembers();
  }
  
  MetaDataColumn: MetaDataColumn[] = [
    {field:'card', title:'Cedula'},
    {field:'name', title:'Nombre'},
    {field:'lastName', title:'Apellido'},
    {field:'semester', title:'Semestre'},
    {field:'major', title:'Carrera'},
    {field:'rol', title:'Rol'},
  ]
  records:any =[]
  totalRecords = this.records.length
  constructor(private dialog:MatDialog){
    this.loadMembers()
  }
  field: any=[];
  loadMembers(){
    this.membersService.getMembers().subscribe(
      (data) =>{
        
        this.records = data.data;
        this.records.forEach((dato:any) => {
          
            this.field.push({
              id: dato.id,
              card: dato.cedula,
              name: dato.nombre,
              lastName: dato.apellido,
              semester: dato.semestre,
              major: dato.carrera.Nombre,
              rol: dato.rol.Nombre
            
          });
        })
        this.totalRecords = this.records.length
        this.changePage(0)
      }
    )
    
  }
  changePage(page:number){
    const pageSize = environment.PAGE_SIZE
    const skip = pageSize * page
    this.data = this.field.slice(skip, skip + pageSize)
  }
  openForm(row: IMembers | null = null) {
    const options = {
      panelClass: 'panel-container',
      disableClose: true,
      data: row
    };
  
    const dialogRef: MatDialogRef<MemberEditFormComponent> = this.dialog.open(MemberEditFormComponent, options);
  
    dialogRef.afterClosed().subscribe((response) => {
      if (!response) {return;}
      if (response.id) {
        const memberData = { ...response };
        this.membersService.updateMember(memberData).subscribe(() => {
          console.log("hora: "+JSON.stringify(memberData))
          this.reloadPage();
                });
      } 
    });
  }
  

    delete(id: string) {
      this.membersService.deleteMember(id).subscribe(() => {
        this.reloadPage();
      }, (error) => {
        console.error('Error deleting member:', error);
      });
    }
    reloadPage() {
      window.location.reload();
    }
}
