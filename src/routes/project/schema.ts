/* 
    id SERIAL PRIMARY KEY,
    slug VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    client_side VARCHAR(255) NOT NULL CHECK (client_side IN ('required', 'optional')),
    server_side VARCHAR(255) NOT NULL CHECK (server_side IN ('required', 'optional')),
    body TEXT,
    status VARCHAR(255) NOT NULL,
    requested_status VARCHAR(255) NOT NULL,
    issues_url VARCHAR(255),
    source_url VARCHAR(255),
    wiki_url VARCHAR(255),
    discord_url VARCHAR(255),
    downloads INT DEFAULT 0,
    icon_url VARCHAR(255),
    color INT,
    team VARCHAR(255), -- Assuming this stores team information as a string
    moderator_message TEXT,
    published TIMESTAMP,
    updated TIMESTAMP,
    approved TIMESTAMP,
    queued TIMESTAMP,
    followers INT DEFAULT 0
*/

import { Elysia, t } from 'elysia';

export const ProjectSchema = t.Object({
  id: t.Number(), // Assuming SERIAL represents a numeric ID
  slug: t.String(),
  title: t.String(),
  description: t.String(), // You can change this to t.String() if TEXT is expected as a string
  client_side: t.Union([t.Literal('required'), t.Literal('optional')]),
  server_side: t.Union([t.Literal('required'), t.Literal('optional')]),
  body: t.String(), // Assuming TEXT is expected as a string
  status: t.String(),
  requested_status: t.String(),
  issues_url: t.String(),
  source_url: t.String(),
  wiki_url: t.String(),
  discord_url: t.String(),
  downloads: t.Number({ default: 0 }),
  icon_url: t.String(),
  color: t.Number(), // Hex color
  team: t.String(), 
  moderator_message: t.String(), // Assuming TEXT is expected as a string
  published: t.String(), // You can change this to t.String() if TIMESTAMP is expected as a string
  updated: t.String(), // You can change this to t.String() if TIMESTAMP is expected as a string
  approved: t.String(), // You can change this to t.String() if TIMESTAMP is expected as a string
  queued: t.String(), // You can change this to t.String() if TIMESTAMP is expected as a string
  followers: t.Number(),
});
