import Image from 'next/image';
import { socialLinks } from './config';

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo of Paavalan"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Hi, I'm{' '}
        <a href={socialLinks.twitter} target="_blank" className="hover:underline">
          Paavalan
        </a>
        !
      </h1>

      <div className="prose prose-neutral dark:prose-invert space-y-5">
        <p>
          I'm an aspiring software engineer passionate about building web applications and always eager to expand my
          skill set.
        </p>
        <p>
          Currently, I'm actively exploring opportunities to deepen my expertise in JavaScript technologies, including
          frameworks and tools that drive modern, scalable applications.
        </p>
        <p>
          Driven by curiosity and a commitment to continuous learning, I'm enthusiastic about tackling new challenges
          and contributing to meaningful projects. Whether you're looking for a dedicated team player or just want to
          connect, feel free to reach out!
        </p>
      </div>
    </section>
  );
}
