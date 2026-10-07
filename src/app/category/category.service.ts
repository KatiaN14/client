import { Service } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from './model/category';
import { CATEGORY_DATA } from './model/mock-categories';

@Service()
export class CategoryService {
    getCategories(): Observable<Category[]> {
        return of(CATEGORY_DATA);
    }

    saveCategory(category: Category): Observable<Category> {
        return of(null);
    }

    deleteCategory(idCategory : number): Observable<any> {
        return of(null);
    }   
}
