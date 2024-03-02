import { z, defineCollection } from "astro:content"

const groupsCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(), // The name of the group i.e. "Cowork With Friends Scottsdale"
    description: z.string(), // A group of tech professionals who cowork in Scottsdale, AZ
    image: z.object({
      // Cover image for the group
      url: z.string(),
      alt: z.string(),
    }),
    acceptingMembers: z.boolean(), // Whether the group is accepting new members
    location: z.string(), // The location of the group i.e. "Scottsdale, AZ"
    isNew: z.boolean(), // Whether or not to show "New group" on /groups page
    organizerName: z.string(), // The name of the organizer i.e. "John Doe"
    organizerEmail: z.string().email(), // The email of the organizer
    organizerImage: z.object({
      // Organizer's profile image
      url: z.string().url(),
      alt: z.string(),
    }),
    joinGroupText: z.string(), // The text to display on the "Join Group" button
    joinGroupUrl: z.string().url(), // The URL to redirect to when the "Join Group" button is clicked
  }),
})

export const collections = {
  groups: groupsCollection,
}
