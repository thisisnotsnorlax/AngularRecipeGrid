import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeList: Recipe[] = [
    {
      id: 1,
      name: 'Choc-Crackle Peanut Butter Cups',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3aE_ZjNTQgJeEiApzwgUzzvM5L_r8oXDTwA&s',
    },
    {
      id: 2,
      name: 'Pancakes1',
      img: 'https://www.allrecipes.com/thmb/hB7uGW06pqyk6hApOfGxk5kG4SI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21014-Good-old-Fashioned-Pancakes-mfs_001-1-8fc3e06998fe4fe8b5f2ad6ba7e8ad46.jpg',
    },
    {
      id: 3,
      name: 'Pancakes2',
      img: 'https://www.allrecipes.com/thmb/hB7uGW06pqyk6hApOfGxk5kG4SI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21014-Good-old-Fashioned-Pancakes-mfs_001-1-8fc3e06998fe4fe8b5f2ad6ba7e8ad46.jpg',
    },
    {
      id: 4,
      name: 'Lemon Eton Mess',
      img: 'https://img.taste.com.au/UOkNsfUb/w720-h480-cfill-q80/taste/2020/08/5-ingredient-lemon-eton-mess-164715-2.jpg',
    },
    {
      id: 5,
      name: 'Choc-Crackle Peanut Butter Cups',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3aE_ZjNTQgJeEiApzwgUzzvM5L_r8oXDTwA&s',
    },
    {
      id: 6,
      name: 'Pancakes',
      img: 'https://www.allrecipes.com/thmb/hB7uGW06pqyk6hApOfGxk5kG4SI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21014-Good-old-Fashioned-Pancakes-mfs_001-1-8fc3e06998fe4fe8b5f2ad6ba7e8ad46.jpg',
    },
    {
      id: 7,
      name: 'Lemon Eton Mess',
      img: 'https://img.taste.com.au/UOkNsfUb/w720-h480-cfill-q80/taste/2020/08/5-ingredient-lemon-eton-mess-164715-2.jpg',
    },
    {
      id: 8,
      name: 'Pancakes',
      img: 'https://www.allrecipes.com/thmb/hB7uGW06pqyk6hApOfGxk5kG4SI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21014-Good-old-Fashioned-Pancakes-mfs_001-1-8fc3e06998fe4fe8b5f2ad6ba7e8ad46.jpg',
    },
    {
      id: 9,
      name: 'Choc-Crackle Peanut Butter Cups',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3aE_ZjNTQgJeEiApzwgUzzvM5L_r8oXDTwA&s',
    },
    {
      id: 10,
      name: 'Lemon Eton Mess',
      img: 'https://img.taste.com.au/UOkNsfUb/w720-h480-cfill-q80/taste/2020/08/5-ingredient-lemon-eton-mess-164715-2.jpg',
    },
  ];

  getRecipe() {
    return this.recipeList;
  }
}
