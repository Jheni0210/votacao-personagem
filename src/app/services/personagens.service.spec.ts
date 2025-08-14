import { TestBed } from '@angular/core/testing';
import { Personagens } from './personagens.service';

describe('Personagens', () => {
  let service: Personagens;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Personagens);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
