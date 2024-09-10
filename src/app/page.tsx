import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { GithubIcon, LinkedinIcon, MailIcon, MenuIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className='min-h-screen bg-gray-700 bg-background text-foreground'>
      {/* Navbar */}
      <nav className='flex items-center justify-between p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50'>
        <Link href='/' className='text-2xl font-bold'>
          Andres Lopez
        </Link>
        <div className='hidden md:flex space-x-4'>
          <Link href='#projects' className='hover:underline'>
            Projects
          </Link>
          <Link href='#about' className='hover:underline'>
            About
          </Link>
          <Link href='#contact' className='hover:underline'>
            Contact
          </Link>
        </div>
        <Button variant='ghost' size='icon' className='md:hidden'>
          <MenuIcon className='h-6 w-6' />
        </Button>
      </nav>

      {/* Hero Section */}
      <section className='py-20 text-center'>
        <h1 className='text-4xl font-bold mb-4'>Welcome to My Portfolio</h1>
        <p className='text-xl mb-8'>I'm a passionate developer creating amazing web experiences</p>
        <Button asChild>
          <Link href='#contact'>Get in Touch</Link>
        </Button>
      </section>

      {/* Projects Section */}
      <section id='projects' className='py-20 bg-muted'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 text-center'>My Projects</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[1, 2, 3].map((project) => (
              <Card key={project}>
                <CardHeader>
                  <CardTitle>Project {project}</CardTitle>
                  <CardDescription>A short description of the project</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src={`/placeholder.svg?height=200&width=400`}
                    alt={`Project ${project}`}
                    width={400}
                    height={200}
                    className='rounded-md mb-4'
                  />
                  <Button asChild>
                    <Link href={`#project-${project}`}>View Project</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='py-20'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 text-center'>About Me</h2>
          <div className='flex flex-col md:flex-row items-center gap-8'>
            <Image
              src='/placeholder.svg?height=300&width=300'
              alt='Your Name'
              width={300}
              height={300}
              className='rounded-full'
            />
            <div>
              <p className='text-lg mb-4'>
                Hello! I'm a passionate web developer with expertise in React, Next.js, and modern web
                technologies. I love creating beautiful and functional web applications that solve real-world
                problems.
              </p>
              <p className='text-lg mb-4'>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source
                projects, or enjoying the great outdoors.
              </p>
              <div className='flex space-x-4'>
                <Button variant='outline' size='icon' asChild>
                  <Link href='https://github.com/yourusername'>
                    <GithubIcon className='h-5 w-5' />
                  </Link>
                </Button>
                <Button variant='outline' size='icon' asChild>
                  <Link href='https://linkedin.com/in/yourusername'>
                    <LinkedinIcon className='h-5 w-5' />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Highlight Section */}
      <section className='py-20 bg-muted'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 text-center'>Featured Work</h2>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((image) => (
              <Image
                key={image}
                src={`/placeholder.svg?height=300&width=300&text=Image+${image}`}
                alt={`Featured work ${image}`}
                width={300}
                height={300}
                className='rounded-md hover:opacity-80 transition-opacity'
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='py-20'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 text-center'>Get in Touch</h2>
          <Card className='max-w-md mx-auto'>
            <CardContent className='space-y-4 pt-6'>
              <Input placeholder='Your Name' />
              <Input type='email' placeholder='Your Email' />
              <Textarea placeholder='Your Message' />
              <Button className='w-full'>
                Send Message
                <MailIcon className='ml-2 h-4 w-4' />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className='py-6 text-center bg-muted'>
        <p>&copy; {new Date().getFullYear()} Andres Lopez. All rights reserved.</p>
      </footer>
    </div>
  )
}
