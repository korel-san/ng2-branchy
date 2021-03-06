import {NodeRemovedEvent, NodeRenamedEvent, NodeCreatedEvent, NodeSelectedEvent, NodeMovedEvent} from './branchy.types';
import {Subject} from 'rxjs/Rx';
import {Injectable} from '@angular/core';

@Injectable()
export class BranchyService {
  public nodeMoved$: Subject<NodeMovedEvent> = new Subject<NodeMovedEvent>();
  public nodeRemoved$: Subject<NodeRemovedEvent> = new Subject<NodeRemovedEvent>();
  public nodeRenamed$: Subject<NodeRenamedEvent> = new Subject<NodeRenamedEvent>();
  public nodeCreated$: Subject<NodeCreatedEvent> = new Subject<NodeCreatedEvent>();
  public nodeSelected$: Subject<NodeSelectedEvent> = new Subject<NodeSelectedEvent>();
}
