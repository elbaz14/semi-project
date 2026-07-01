import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-faq',
  imports: [NgFor],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class Faq {
  faqs = [
    {
      question: 'What are your opening hours?',
      answer: 'We are open Sunday–Thursday from 7:00 to 22:00 and Friday from 7:00 to 15:00. Closed on Saturday.',
      open: false,
    },
    {
      question: 'Do you offer delivery?',
      answer: 'Yes! We deliver within a 5 km radius. Orders can be placed through our website or by calling 03-1234567.',
      open: false,
    },
    {
      question: 'Are there vegan or dairy-free options?',
      answer: 'Absolutely. We offer oat, almond, and soy milk as alternatives. Many of our pastries are also vegan-friendly.',
      open: false,
    },
    {
      question: 'Can I make a reservation?',
      answer: 'Yes, reservations can be made through our Contact page or by phone. We recommend booking in advance for groups of 6 or more.',
      open: false,
    },
    {
      question: 'Do you offer catering services?',
      answer: 'We do! Our catering menu includes coffee, pastries, and light meals. Contact us for a custom quote.',
      open: false,
    },
    {
      question: 'Is there Wi-Fi available?',
      answer: 'Yes, free Wi-Fi is available for all our customers. Ask the staff for the password.',
      open: false,
    },
  ];

  toggle(faq: any) {
    faq.open = !faq.open;
  }
}
