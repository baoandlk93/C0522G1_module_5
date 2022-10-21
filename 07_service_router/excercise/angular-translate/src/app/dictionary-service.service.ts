import {Injectable} from '@angular/core';
import {IWord} from './iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  dictionary: IWord[] = [
    {
      word: 'apple',
      mean: 'Quả Táo'
    },
    {
      word: 'pencil',
      mean: 'Bút chì'
    },
    {
      word: 'create',
      mean: 'Tạo mới'
    },
    {
      word: 'update',
      mean: 'Cập nhật'
    },
    {
      word: 'run',
      mean: 'Chạy'
    },
    {
      word: 'window',
      mean: 'Cửa sổ'
    },
    {
      word: 'door',
      mean: 'Cửa'
    },
    {
      word: 'orange',
      mean: 'Quả cam, màu cam'
    },
    {
      word: 'file',
      mean: 'tệp'
    },

  ];

  constructor() {
  }

  translate(keyword: string) {
    return this.dictionary.find(word => word.word === keyword);

  }

  findAll(): IWord[] {
    return this.dictionary;
  }

}
