Karte
=====

Naming and directory for Thoregon. The stellar map shows everything that is visible in the universe.

Provides a browser for the universe

## Handles
Unique names for arbitrary objects. A 'name' is always comprised of a namespace and a name.
Properties of a handle
- namespace + name
- image
- style
- image
- attic     ... a set of additional arbitrary information   

## Tags
Tags for sets of objects. A 'tag' is always comprised of a namespace and a name.
Properties of a tag:
- namespace + name
- image
- type
- style
- image
- importance

## Translations

Resolves URI's, X.500 adresses (LDAP) local path, ...

Think of it like a public DNS.

Supports 
- scopes - technical visibility, defined for the node (each installation)
- realms - business visibility (permissions), defined for each user (principal)
- stage  - system visiblity, define for a group of nodes e.g. for testing, production, ...
- local names

(If installed uses the evolux.turnup API to collect information.)

## Structured query result
Groups and tags query results. 

## UI

KARTE comes with a UI Webcomponent to browse the Universe.
The default view is inspired by OSX finder column mode with a preview.
Works also on small screens (mobile).

There is also a graph browser with a hyperbolic view available.
 
The bowsers uses meta information for proper display of objects, there also
exists a 'raw' mode which shows the raw information in the distributed DB.
 
