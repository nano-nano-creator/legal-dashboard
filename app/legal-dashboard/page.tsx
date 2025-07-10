
'use client';
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LegalDashboard() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Dashboard Divisi Legal</h1>
      <Tabs defaultValue="home" className="space-y-4">
        <TabsList>
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="antrian">Daftar Antrian Perjanjian</TabsTrigger>
          <TabsTrigger value="pekerjaan">Daftar Pekerjaan Tim</TabsTrigger>
          <TabsTrigger value="template">Template Perjanjian</TabsTrigger>
          <TabsTrigger value="evaluasi">Aduan & Evaluasi</TabsTrigger>
        </TabsList>

        <TabsContent value="home">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">Kalender Deadline</h2>
              <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="antrian">
          <Card>
            <CardContent className="p-4 space-y-4">
              <h2 className="text-xl font-semibold">Daftar Antrian Perjanjian</h2>
              <div>
                <h3 className="font-medium">Pengajuan Review</h3>
                <ul className="list-disc ml-6">
                  <li>Perjanjian A - 10 Juli 2025</li>
                  <li>Perjanjian B - 11 Juli 2025</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Draft</h3>
                <ul className="list-disc ml-6">
                  <li>Perjanjian C - 12 Juli 2025</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pekerjaan">
          <Card>
            <CardContent className="p-4 space-y-4">
              <h2 className="text-xl font-semibold">Daftar Pekerjaan Tim</h2>
              <div>
                <h3 className="font-medium">Belum Dikerjakan</h3>
                <ul className="list-disc ml-6">
                  <li>Perjanjian D</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Sedang Dikerjakan</h3>
                <ul className="list-disc ml-6">
                  <li>Perjanjian E</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Sudah Selesai</h3>
                <ul className="list-disc ml-6">
                  <li>Perjanjian F</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="template">
          <Card>
            <CardContent className="p-4 space-y-4">
              <h2 className="text-xl font-semibold">Template Perjanjian</h2>
              <ul className="list-disc ml-6">
                <li>Perjanjian Kerja Sama</li>
                <li>Perjanjian Kerahasiaan (NDA)</li>
                <li>Perjanjian Sponsorship</li>
                <li>Perjanjian Bisnis Lainnya</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="evaluasi">
          <Card>
            <CardContent className="p-4 space-y-4">
              <h2 className="text-xl font-semibold">Aduan & Evaluasi Tim Legal</h2>
              <Textarea placeholder="Tuliskan aduan atau evaluasi Anda di sini..." className="min-h-[120px]" />
              <Button>Kirim</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
